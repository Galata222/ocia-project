import React, { useState } from 'react';
import axios from 'axios';

const SubmitRisk = () => {
    const [formData, setFormData] = useState({
        risk_type: '',
        risk_description: '',
        risk_date: '',
        status: 'Submitted',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/risks/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert("Risk submitted successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("There was an error submitting the risk!", error);
        }
    };

    return (
        <div>
            <h1>Submit Risk</h1>
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
                <button type="submit">Submit Risk</button>
            </form>
        </div>
    );
};

export default SubmitRisk;
