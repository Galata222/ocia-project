import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RiskList = () => {
    const [risks, setRisks] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        fetchRisks();
    }, []);

    const fetchRisks = async () => {
        try {
            const response = await axios.get('/api/risks/');
            setRisks(response.data);
        } catch (error) {
            console.error("Error fetching risks:", error);
        }
    };

    const handleDelete = async (riskId) => {
        try {
            await axios.delete(`/api/risks/${riskId}/`);
            setRisks(risks.filter((risk) => risk.risk_id !== riskId));
            alert("Risk deleted successfully.");
        } catch (error) {
            console.error("Error deleting risk:", error);
        }
    };

    return (
        <div>
            <h1>All Risks</h1>
            <ul>
                {risks.map((risk) => (
                    <li key={risk.risk_id}>
                        <strong>Type:</strong> {risk.risk_type}<br />
                        <strong>Description:</strong> {risk.risk_description}<br />
                        <strong>Date:</strong> {risk.risk_date}<br />
                        <strong>Status:</strong> {risk.status}
                        <br />
                        <button onClick={() => history.push(`/risks/${risk.risk_id}`)}>View</button>
                        <button onClick={() => history.push(`/risks/edit/${risk.risk_id}`)}>Update</button>
                        <button onClick={() => handleDelete(risk.risk_id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RiskList;
