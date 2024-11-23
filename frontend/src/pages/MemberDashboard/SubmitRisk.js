import React, { useState, useEffect } from 'react';
import api from '../../utils/api'; // Adjust the import based on your API setup

const SubmitRisk = ({ risk, onClose, onUpdate }) => {
    const [riskType, setRiskType] = useState('');
    const [riskDescription, setRiskDescription] = useState('');
    const [riskDate, setRiskDate] = useState('');
    const [status, setStatus] = useState('Submitted'); // Default status
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); // State to check if the user is admin

    useEffect(() => {
        // Fetch user role to determine if they are admin
        const fetchUserRole = async () => {
            try {
                const response = await api.get('/user-role/'); // Adjust the endpoint to your backend
                setIsAdmin(response.data.is_admin); // Assume the API returns { is_admin: true/false }
            } catch (err) {
                console.error('Failed to fetch user role:', err);
            }
        };

        fetchUserRole();

        if (risk) {
            // Populate fields if editing an existing risk
            setRiskType(risk.risk_type);
            setRiskDescription(risk.risk_description);
            setRiskDate(risk.risk_date);
            setStatus(risk.status || 'Submitted');
        } else {
            // Reset fields if not editing
            setRiskType('');
            setRiskDescription('');
            setRiskDate('');
            setStatus('Submitted');
        }
    }, [risk]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!riskType.trim() || !riskDescription.trim() || !riskDate.trim()) {
            setError('All fields are required.');
            return;
        }

        setLoading(true);

        try {
            const riskData = { risk_type: riskType, risk_description: riskDescription, risk_date: riskDate, status };
            if (risk) {
                // Update existing risk
                await api.put(`/risks/${risk.id}/`, riskData);
                onUpdate((prevRisks) =>
                    prevRisks.map((r) => (r.id === risk.id ? { ...r, ...riskData } : r))
                );
            } else {
                // Create new risk
                const response = await api.post('/risks/create/', riskData);
                onUpdate((prevRisks) => [...prevRisks, response.data]);
            }
            setSuccess('Risk saved successfully!');
            setTimeout(() => setSuccess(''), 3000);
            onClose(); // Close the form
        } catch (err) {
            const errorMessage = err.response?.data?.detail || 'An error occurred while saving the risk.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>{risk ? 'Edit Risk' : 'Submit Risk'}</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="riskType" className="form-label">Risk Type</label>
                    <select
                        id="riskType"
                        className="form-control"
                        value={riskType}
                        onChange={(e) => setRiskType(e.target.value)}
                        required
                        disabled={isAdmin} // Disable for admin
                    >
                        <option value="">Select Risk Type</option>
                        <option value="Death">Death</option>
                        <option value="Car Accident">Car Accident</option>
                        <option value="Sickness">Sickness</option>
                        <option value="Business Failure">Business Failure</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="riskDescription" className="form-label">Risk Description</label>
                    <textarea
                        id="riskDescription"
                        className="form-control"
                        value={riskDescription}
                        onChange={(e) => setRiskDescription(e.target.value)}
                        required
                        disabled={isAdmin} // Disable for admin
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="riskDate" className="form-label">Risk Date</label>
                    <input
                        type="date"
                        id="riskDate"
                        className="form-control"
                        value={riskDate}
                        onChange={(e) => setRiskDate(e.target.value)}
                        required
                        disabled={isAdmin} // Disable for admin
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    {isAdmin ? (
                        <select
                            id="status"
                            className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Submitted">Submitted</option>
                            <option value="Approved">Approved</option>
                            <option value="Disapproved">Disapproved</option>
                        </select>
                    ) : (
                        <input
                            type="text"
                            id="status"
                            className="form-control"
                            value={status}
                            disabled
                        />
                    )}
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Saving...' : (risk ? 'Update Risk' : 'Submit Risk')}
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default SubmitRisk;
