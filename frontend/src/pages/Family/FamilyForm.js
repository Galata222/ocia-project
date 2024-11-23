// src/components/FamilyForm.js
import React, { useState, useEffect } from 'react';
import api from '../../utils/api'; // Adjust the import based on your API setup

const FamilyForm = ({ family, onClose, onUpdate }) => {
  const [relationship, setRelationship] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (family) {
      // Populate fields if editing an existing family member
      setRelationship(family.relationship);
      setName(family.name);
      setAge(family.age);
    } else {
      // Reset fields if not editing
      setRelationship('');
      setName('');
      setAge('');
    }
  }, [family]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!relationship.trim() || !name.trim() || !age) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);

    try {
      const familyData = { relationship, name, age };
      if (family) {
        // Update existing family member
        await api.put(`/family/${family.family_id}/update/`, familyData);
        onUpdate((prevFamilies) =>
          prevFamilies.map((f) => (f.family_id === family.family_id ? { ...f, ...familyData } : f))
        );
      } else {
        // Create new family member
        await api.post('/family/create/', familyData);
        onUpdate((prevFamilies) => [...prevFamilies, { ...familyData, family_id: Date.now() }]); // Mock ID for new entry
      }
      setSuccess('Family member saved successfully!');
      setTimeout(() => setSuccess(''), 3000);
      onClose(); // Close the form
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'An error occurred while saving the family member.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{family ? 'Edit Family Member' : 'Add Family Member'}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="relationship" className="form-label">Relationship</label>
          <input
            type="text"
            className="form-control"
            id="relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : (family ? 'Update Family Member' : 'Add Family Member')}
        </button>
        <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FamilyForm;