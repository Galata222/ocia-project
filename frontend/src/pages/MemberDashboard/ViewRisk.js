import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewRisk = () => {
    const { id } = useParams();
    const [risk, setRisk] = useState(null);

    useEffect(() => {
        const fetchRisk = async () => {
            try {
                const response = await axios.get(`/api/risks/${id}/`);
                setRisk(response.data);
            } catch (error) {
                console.error("Error fetching risk:", error);
            }
        };
        fetchRisk();
    }, [id]);

    if (!risk) return <div>Loading...</div>;

    return (
        <div>
            <h1>Risk Details</h1>
            <p><strong>Type:</strong> {risk.risk_type}</p>
            <p><strong>Description:</strong> {risk.risk_description}</p>
            <p><strong>Date:</strong> {risk.risk_date}</p>
            <p><strong>Status:</strong> {risk.status}</p>
        </div>
    );
};

export default ViewRisk;
