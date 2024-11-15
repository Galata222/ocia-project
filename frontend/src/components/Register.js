import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';
import '../style/register.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const checksumIsValid = (routingNumber) => {
    const digits = routingNumber.split('').map(Number);
    const checksum =
        (digits[0] + digits[3] + digits[6]) * 3 +
        (digits[1] + digits[4] + digits[7]) * 7 +
        (digits[2] + digits[5]) * 1;

    return checksum % 10 === 0;
};

const schema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    age: yup.number().min(0).max(120).required('Age is required'),
    gender: yup.string().oneOf(['Male', 'Female', 'Other'], 'Gender is required').required('Gender is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    street: yup.string().required('Street address is required'),
    apartment: yup.string().optional(),
    city: yup.string().matches(/^[a-zA-Z\s]+$/, 'City must only contain letters and spaces').required('City is required'),
    state: yup.string().length(2, 'State must be 2 letters').matches(/^[A-Z]{2}$/, 'State must be a valid abbreviation').required('State is required'),
    zip: yup.string().matches(/^\d{5}(-\d{4})?$/, 'ZIP code must be in the format 12345 or 12345-6789').required('ZIP code is required'),
    bank_name: yup.string().required('Bank name is required'),
    bank_account_number: yup.string().matches(/^\d{8,12}$/, 'Account number must be between 8 and 12 digits').required('Bank account number is required'),
    routing_number: yup.string().length(9, 'Routing number must be 9 digits').matches(/^\d+$/, 'Routing number must be numeric').test('checksum', 'Invalid routing number', value => (value && checksumIsValid(value))).required('Routing number is required'),
    swift_bic_code: yup.string().optional(),
    password: yup.string().min(8, 'Password must be at least 8 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, 'Password must contain uppercase, lowercase, number, and special character').required('Password is required'),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    social_security_number: yup.string().matches(/^\d{3}-\d{2}-\d{4}$/, 'SSN must be in the format XXX-XX-XXXX').required('Social Security Number is required'),
    status: yup.string().oneOf(['Pending', 'approved', 'rejected'], 'Status is required').required('Status is required'),
    consent: yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required('Consent is required'),
});

const Register = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            status: 'Pending', 
            consent: false 
        }
    });

    const [message, setMessage] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await api.get('users/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                setError('There was an error fetching the users!');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setRegistrationError("Passwords do not match.");
            return;
        }

        try {
            const response = await api.post('/register/', formData);
            setMessage('User registered successfully! A confirmation email has been sent.');
            setRegistrationError('');
            // Reset the form
            setFormData({
                first_name: '',
                last_name: '',
                age: '',
                gender: '',
                email: '',
                phone: '',
                address: '',
                occupation: '',
                employer: '',
                monthly_income: '',
                bank_name: '',
                bank_account_number: '',
                swift_bic_code: '',
                password: '',
                confirmPassword: '',
                role: 'user',
            });
            setShowForm(false); // Hide the form after successful registration
        } catch (err) {
            const errorMessage = err.response?.data?.detail || 'Error registering user.';
            setRegistrationError(errorMessage);
            setMessage('');
        }
    };

    const columns = [
        { name: 'Username', selector: row => row.email, sortable: true },
        { name: 'First Name', selector: row => row.first_name, sortable: true },
        { name: 'Last Name', selector: row => row.last_name, sortable: true },
        { name: 'Status', selector: row => row.status, sortable: true },
    ];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="register__container">
            <h2 className="register__title">Register</h2>
            <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                <label className="register__label">First Name</label>
                <Controller
                    name="first_name"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.first_name && <p className="register__error">{errors.first_name.message}</p>}

                <label className="register__label">Last Name</label>
                <Controller
                    name="last_name"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.last_name && <p className="register__error">{errors.last_name.message}</p>}

                <label className="register__label">Age</label>
                <Controller
                    name="age"
                    control={control}
                    render={({ field }) => <input type="number" {...field} className="register__input" />}
                />
                {errors.age && <p className="register__error">{errors.age.message}</p>}

                <label className="register__label">Gender</label>
                <div className="register__gender">
                    <Controller
                        name="gender"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <>
                                <label>
                                    <input
                                        type="radio"
                                        value="Male"
                                        checked={field.value === 'Male'}
                                        onChange={() => field.onChange('Male')}
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Female"
                                        checked={field.value === 'Female'}
                                        onChange={() => field.onChange('Female')}
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Other"
                                        checked={field.value === 'Other'}
                                        onChange={() => field.onChange('Other')}
                                    />
                                    Other
                                </label>
                            </>
                        )}
                    />
                    {errors.gender && <p className="register__error">{errors.gender.message}</p>}
                </div>

                <label className="register__label">Email</label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <input type="email" {...field} className="register__input" />}
                />
                {errors.email && <p className="register__error">{errors.email.message}</p>}

                <label className="register__label">Phone Number</label>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <PhoneInput
                            international
                            defaultCountry="US"
                            {...field}
                            className="register__phone-input"
                        />
                    )}
                />
                {errors.phone && <p className="register__error">{errors.phone.message}</p>}

                <label className="register__label">Street Address</label>
                <Controller
                    name="street"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.street && <p className="register__error">{errors.street.message}</p>}

                <label className="register__label">Apartment Number</label>
                <Controller
                    name="apartment"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />

                <label className="register__label">City</label>
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.city && <p className="register__error">{errors.city.message}</p>}

                <label className="register__label">State (2-letter code)</label>
                <Controller
                    name="state"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.state && <p className="register__error">{errors.state.message}</p>}

                <label className="register__label">ZIP Code</label>
                <Controller
                    name="zip"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.zip && <p className="register__error">{errors.zip.message}</p>}

                <label className="register__label">Social Security Number</label>
                <Controller
                    name="social_security_number"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.social_security_number && <p className="register__error">{errors.social_security_number.message}</p>}

                <label className="register__label">Status</label>
                <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                        <select {...field} className="register__input" disabled={!field.value}>
                            <option value="Pending">Pending</option>
                            <option value="Active">Approved</option>
                            <option value="Inactive">Rejected</option>
                        </select>
                    )}
                />
                {errors.status && <p className="register__error">{errors.status.message}</p>}

                <label className="register__label">Bank Name</label>
                <Controller
                    name="bank_name"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.bank_name && <p className="register__error">{errors.bank_name.message}</p>}

                <label className="register__label">Bank Account Number</label>
                <Controller
                    name="bank_account_number"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.bank_account_number && <p className="register__error">{errors.bank_account_number.message}</p>}

                <label className="register__label">Routing Number</label>
                <Controller
                    name="routing_number"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />
                {errors.routing_number && <p className="register__error">{errors.routing_number.message}</p>}

                <label className="register__label">Swift/BIC Code</label>
                <Controller
                    name="swift_bic_code"
                    control={control}
                    render={({ field }) => <input {...field} className="register__input" />}
                />

                <label className="register__label">Password</label>
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <input type="password" {...field} className="register__input" />}
                />
                {errors.password && <p className="register__error">{errors.password.message}</p>}

                <label className="register__label">Confirm Password</label>
                <Controller
                    name="confirm_password"
                    control={control}
                    render={({ field }) => <input type="password" {...field} className="register__input" />}
                />
                {errors.confirm_password && <p className="register__error">{errors.confirm_password.message}</p>}

                {/* Consent Checkbox */}
                <label className="register__label register__consent-link" onClick={handleConsentClick}>
                    <span className="register__consent-text">I agree to the terms and conditions</span>
                </label>
                {isConsentVisible && (
                    <div className="register__consent-textbox">
                        <p>
                            By joining, you agree to our <a href="/terms">Terms and Conditions</a>.
                        </p>
                        <Controller
                            name="consent"
                            control={control}
                            render={({ field }) => (
                                <div className="register__consent-checkbox">
                                    <input type="checkbox" {...field} />
                                    <span>Yes, I agree</span>
                                </div>
                            )}
                        />
                        {errors.consent && <p className="register__error">{errors.consent.message}</p>}
                    </div>
                )}

                <button type="submit" className="register__button">Register</button>
            </form>
            {message && <p className="register__message">{message}</p>}
            {error && <p className="register__error">{error}</p>}
        </div>
    );
};

export default ManageUsers;