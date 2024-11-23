// src/components/RiskList.js
import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import SubmitRisk from './SubmitRisk'; // Assuming you have a SubmitRisk component for editing

const RiskList = () => {
    const [risks, setRisks] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [editingRisk, setEditingRisk] = useState(null); // For editing a risk

    // Fetch risks from the backend
    useEffect(() => {
        const fetchRisks = async () => {
            try {
                const response = await api.get('/risks/');
                setRisks(response.data); // Set the fetched risks data
            } catch (err) {
                const errorMessage = err.response?.data?.detail;
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchRisks();
    }, []);

    // Handle the edit action
    const handleEdit = (risk) => {
        setEditingRisk(risk); // Set the risk to be edited
    };

    // Handle the delete action
    const handleDelete = async (risk_id) => {
        if (window.confirm('Are you sure you want to delete this risk?')) {
            try {
                console.log(`Attempting to delete risk with ID: ${risk_id}`);
                await api.delete(`/risks/${risk_id}/delete/`); // Make DELETE request
                setRisks(risks.filter(risk => risk.risk_id !== risk_id)); // Update the list after deletion
            } catch (err) {
                console.error(err); // Log the error for debugging
                const errorMessage = err.response?.data?.detail || 'An error occurred while deleting the risk.';
                setError(errorMessage);
            }
        }
    };

    // If loading, display loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // If there is an error, display the error message
    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    // If no risks are found, show this message
    if (risks.length === 0) {
        return <div>No risks found.</div>;
    }

    return (
        <div>
            <h2>Risk List</h2>
            <ul>
                {risks.map((risk) => (
                    <li key={risk.risk_id}> {/* Updated to risk.risk_id */}
                        {risk.risk_type}: {risk.risk_description}
                        <button onClick={() => handleEdit(risk)} className="btn btn-secondary ms-2">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(risk.risk_id)} className="btn btn-danger ms-2"> {/* Updated to risk.risk_id */}
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {/* Show the SubmitRisk for editing if editingRisk is set */}
            {editingRisk && (
                <SubmitRisk risk={editingRisk} onClose={() => setEditingRisk(null)} onUpdate={setRisks} />
            )}
        </div>
    );
};

export default RiskList;
