// src/components/FamilyList.js
import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import FamilyForm from './FamilyForm'; 

const FamilyList = () => {
  const [families, setFamilies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingFamily, setEditingFamily] = useState(null); 

  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const response = await api.get('/family/');
        setFamilies(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.detail ;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFamilies();
  }, []);

  const handleEdit = (family) => {
    setEditingFamily(family); 
  };

  const handleDelete = async (family_id) => { // Updated parameter to family_id
    if (window.confirm('Are you sure you want to delete this family member?')) {
      try {
        console.log(`Attempting to delete family member with ID: ${family_id}`); // Log the ID
        await api.delete(`/family/${family_id}/delete/`); // Make DELETE request
        setFamilies(families.filter(family => family.family_id !== family_id)); // Update the list
      } catch (err) {
        console.error(err); // Log the error for more context
        const errorMessage = err.response?.data?.detail || 'An error occurred while deleting the family member.';
        setError(errorMessage);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (families.length === 0) {
    return <div>No family members found.</div>;
  }

  return (
    <div>
      <h2>Family List</h2>
      <ul>
        {families.map((family) => (
          <li key={family.family_id}> {/* Updated to family.family_id */}
            {family.name}
            <button onClick={() => handleEdit(family)} className="btn btn-secondary ms-2">
              Edit
            </button>
            <button onClick={() => handleDelete(family.family_id)} className="btn btn-danger ms-2"> {/* Updated to family.family_id */}
              Delete
            </button>
          </li>
        ))}
      </ul>
      {editingFamily && (
        <FamilyForm family={editingFamily} onClose={() => setEditingFamily(null)} onUpdate={setFamilies} />
      )}
    </div>
  );
};

export default FamilyList;