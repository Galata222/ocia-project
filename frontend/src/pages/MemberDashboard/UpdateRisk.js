import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateRisk = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        risk_type: '',
        risk_description: '',
        risk_date: '',
        status: 'Submitted',
    });

    useEffect(() => {
        const fetchRisk = async () => {
            try {
                const response = await axios.get(`/api/risks/${id}/`);
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching risk:", error);
            }
        };
        fetchRisk();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/risks/${id}/`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert("Risk updated successfully!");
            navigate("/risks"); // Replaces history.push("/risks")
        } catch (error) {
            console.error("Error updating risk:", error);
        }
    };

    return (
        <div>
            <h1>Update Risk</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Risk Type:
                    <input
                        type="text"
                        name="risk_type"
                        value={formData.risk_type}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Risk Description:
                    <textarea
                        name="risk_description"
                        value={formData.risk_description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Risk Date:
                    <input
                        type="date"
                        name="risk_date"
                        value={formData.risk_date}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Status:
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Submitted">Submitted</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </label>
                <br />
                <button type="submit">Update Risk</button>
            </form>
        </div>
    );
};

export default UpdateRisk;
