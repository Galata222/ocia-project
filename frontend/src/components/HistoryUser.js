import React, { useEffect, useState } from 'react';
import '../style/history.css';

const HistoryUser = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch('backend here');
                const data = await response.json();
                setHistory(data);
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div className="history-component">
            <h1>History</h1>
            <div className="history-list">
                {history.length > 0 ? (
                    history.map((event, index) => (
                        <div className="history-item" key={index}>
                            <h4>{event.title}</h4>
                            <p>{event.details}</p>
                            <p><strong>Timestamp:</strong> {new Date(event.timestamp).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No history available.</p>
                )}
            </div>
        </div>
    );
};

export default HistoryUser;