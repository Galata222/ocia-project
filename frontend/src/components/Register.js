import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';
import '../style/register.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Checksum validation for routing number
const checksumIsValid = (routingNumber) => {
    const digits = routingNumber.split('').map(Number);
    const checksum =
        (digits[0] + digits[3] + digits[6]) * 3 +
        (digits[1] + digits[4] + digits[7]) * 7 +
        (digits[2] + digits[5]) * 1;

    return checksum % 10 === 0;
};

// Validation schema using Yup
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
    status: yup.string().oneOf(['Pending', 'Approved', 'Rejected'], 'Status is required').required('Status is required'),
    consent: yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required('Consent is required'),
});

const Register = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            status: 'Pending',
            consent: false,
        },
    });

    const [message, setMessage] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch users (if necessary, otherwise consider removing)
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('accessToken');
                const response = await api.get('users/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Handle fetched users as needed
            } catch (error) {
                setRegistrationError('There was an error fetching the users!');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const onSubmit = async (data) => {
        try {
            const response = await api.post('/register/', data);
            setMessage('User registered successfully! A confirmation email has been sent.');
            setRegistrationError('');
        } catch (err) {
            const errorMessage = err.response?.data?.detail || 'Error registering user.';
            setRegistrationError(errorMessage);
            setMessage('');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="register__container">
            <h2 className="register__title">Register</h2>
            <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                {/* Reusable Input Component */}
                {['first_name', 'last_name', 'age', 'street', 'apartment', 'city', 'state', 'zip', 'social_security_number', 'bank_name', 'bank_account_number', 'routing_number', 'swift_bic_code'].map((field) => (
                    <InputField key={field} name={field} control={control} errors={errors} />
                ))}

                {/* Gender Radio Buttons */}
                <label className="register__label">Gender</label>
                <div className="register__gender">
                    {['Male', 'Female', 'Other'].map((gender) => (
                        <label key={gender}>
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="radio"
                                        value={gender}
                                        checked={field.value === gender}
                                        onChange={() => field.onChange(gender)}
                                    />
                                )}
                            />
                            {gender}
                        </label>
                    ))}
                </div>
                {errors.gender && <p className="register__error">{errors.gender.message}</p>}

                {/* Email Input */}
                <InputField name="email" control={control} type="email" errors={errors} />

                {/* Phone Number Input */}
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

                {/* Password Fields */}
                <InputField name="password" control={control} type="password" errors={errors} />
                <InputField name="confirm_password" control={control} type="password" errors={errors} />

                {/* Status Dropdown */}
                <label className="register__label">Status</label>
                <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                        <select {...field} className="register__input">
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    )}
                />
                {errors.status && <p className="register__error">{errors.status.message}</p>}

                {/* Consent Checkbox */}
                <Controller
                    name="consent"
                    control={control}
                    render={({ field }) => (
                        <div className="register__consent-checkbox">
                            <input type="checkbox" {...field} />
                           
                            <span>I agree to the <a href='/termsandcondition'>TermsAndConditions</a> </span>
                        </div>
                    )}
                />
                {errors.consent && <p className="register__error">{errors.consent.message}</p>}

                <button type="submit" className="register__button">Register</button>
            </form>
            {message && <p className="register__message">{message}</p>}
            {registrationError && <p className="register__error">{registrationError}</p>}
        </div>
    );
};

// Reusable InputField Component
const InputField = ({ name, control, type = 'text', errors }) => (
    <>
        <label className="register__label">{name.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => <input {...field} type={type} className="register__input" />}
        />
        {errors[name] && <p className="register__error">{errors[name].message}</p>}
    </>
);

export default Register;