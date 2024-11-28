// src/components/FamilyForm.js
import React, { useState, useEffect } from 'react';
import api from '../../utils/api'; 
import '../../style/FamilyForm.css'


const FamilyForm = ({ family, onClose, onUpdate }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [relationship, setRelationship] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (family) {
      setFirstName(family.firstName);
      setLastName(family.lastName);
      setAge(family.age);
      setSex(family.sex);
      setRelationship(family.relationship);
    } else {
      setFirstName('');
      setLastName('');
      setAge('');
      setSex('');
      setRelationship('');
    }
  }, [family]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!firstName.trim() || !lastName.trim() || !relationship.trim() || !age || !sex) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    try {
      const familyData = { firstName, lastName, age, sex, relationship };
      if (family) {
        await api.put(`/family/${family.family_id}/update/`, familyData);
        onUpdate((prevFamilies) =>
          prevFamilies.map((f) => (f.family_id === family.family_id ? { ...f, ...familyData } : f))
        );
      } else {
        await api.post('/family/create/', familyData);
        onUpdate((prevFamilies) => [...prevFamilies, { ...familyData, family_id: Date.now() }]);
      }
      setSuccess('Family member saved successfully!');
      setTimeout(() => setSuccess(''), 3000);
      onClose();
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'An error occurred while saving the family member.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="family-form-container">
      <div className="family-form">
        <h2>{family ? 'Edit Family Member' : 'Add Family Member'}</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sex" className="form-label">Sex</label>
            <select
              className="form-select"
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
            >
              <option value="" disabled>Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="relationship" className="form-label">Relationship</label>
            <select
              className="form-select"
              id="relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              required
            >
              <option value="" disabled>Select Relationship</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="sibling">Sibling</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Saving...' : (family ? 'Update Family Member' : 'Add Family Member')}
          </button>
          <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default FamilyForm;