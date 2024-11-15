import React, { useState } from 'react';
import axios from 'axios';
import '../../style/risk.css'; // Importing the CSS file for this component

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
        <div className="risk__container">
            <h1 className="risk__title">Submit Risk</h1>
            <form className="risk__form" onSubmit={handleSubmit}>
                <label className="risk__label">
                    Risk Type:
                    <select
                        name="risk_type"
                        className="risk__select"
                        value={formData.risk_type}
                        onChange={handleChange}
                    >
                        <option value="">Select Risk Type</option>
                        <option value="Death">Death</option>
                        <option value="Car Accident">Car Accident</option>
                        <option value="Sickness">Sickness</option>
                        <option value="Business Failure">Business Failure</option>
                    </select>
                </label>
                <br />
                <label className="risk__label">
                    Risk Description:
                    <textarea
                        name="risk_description"
                        className="risk__textarea"
                        value={formData.risk_description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label className="risk__label">
                    Risk Date:
                    <input
                        type="date"
                        name="risk_date"
                        className="risk__input"
                        value={formData.risk_date}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit" className="risk__button">Submit Risk</button>
            </form>
        </div>
    );
};

export default SubmitRisk;