import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import SubmitRisk from './SubmitRisk';

const RiskList = () => {
    const [risks, setRisks] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [editingRisk, setEditingRisk] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchRisks = async () => {
            try {
                // Check if the user is an admin
                const roleResponse = await api.get('/user-role/');
                setIsAdmin(roleResponse.data.is_admin);
                //console.log(isAdmin);
                // Fetch risks based on the user's role
                const endpoint = roleResponse.data.is_admin ? '/risks/admin/' : '/risks/';
                const response = await api.get(endpoint);
                setRisks(response.data);
            } catch (err) {
                const errorMessage = err.response?.data?.detail || 'Failed to fetch risks.';
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchRisks();
    }, []);

    const handleEdit = (risk) => {
        setEditingRisk(risk);
    };

    const handleDelete = async (risk_id) => {
        if (window.confirm('Are you sure you want to delete this risk?')) {
            try {
                await api.delete(`/risks/${risk_id}/delete/`);
                setRisks(risks.filter((risk) => risk.risk_id !== risk_id));
            } catch (err) {
                const errorMessage = err.response?.data?.detail || 'An error occurred while deleting the risk.';
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

    if (risks.length === 0) {
        return <div>No risks found.</div>;
    }

    return (
        <div>
            <h2>Risk List</h2>
            <ul>
                {risks.map((risk) => (
                    <li key={risk.risk_id}>
                        {risk.risk_type}: {risk.risk_description}
                        <button onClick={() => handleEdit(risk)} className="btn btn-secondary ms-2">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(risk.risk_id)} className="btn btn-danger ms-2">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {editingRisk && (
                <SubmitRisk risk={editingRisk} onClose={() => setEditingRisk(null)} onUpdate={setRisks} />
            )}
        </div>
    );
};

export default RiskList;
