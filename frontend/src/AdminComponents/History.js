import React from 'react';
import '../style/Adminstyle/History.css'

function History() {
  // Sample data for demonstration purposes
  const historyData = [
    { id: 1, date: '2024-09-10', event: 'User signed up' },
    { id: 2, date: '2024-09-11', event: 'User submitted a report' },
    { id: 3, date: '2024-09-12', event: 'Admin approved report' },
    // Add more data as needed
  ];

  return (
    <div className="history-container">
      <h1 className="history-title">History</h1>
      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
