import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../axiosConfig';

const FamilyForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [family, setFamily] = useState({
        relationship: '',
        name: '',
        age: '',
    });
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (id) {
            api.get(`families/${id}/`)
                .then(response => {
                    setFamily(response.data);
                    setIsUpdate(true);
                })
                .catch(error => console.error('Error fetching family member:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFamily({
            ...family,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUpdate) {
            api.put(`families/${family.family_id}/`, family)
                .then(() => {
                    navigate('/families');
                })
                .catch(error => console.error('Error updating family member:', error));
        } else {
            api.post('families/', family)
                .then(() => {
                    navigate('/families');
                })
                .catch(error => console.error('Error creating family member:', error));
        }
    };

    return (
        <div className="container">
            <h2>{isUpdate ? 'Update Family Member' : 'Add Family Member'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="relationship" className="form-label">Relationship</label>
                    <input
                        type="text"
                        name="relationship"
                        value={family.relationship}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Relationship"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={family.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                        type="text"
                        name="age"
                        value={family.age}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Age"
                    />
                </div>
                <button type="submit" className="btn btn-primary">{isUpdate ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default FamilyForm;
