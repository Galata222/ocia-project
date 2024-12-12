import React from 'react';
import '../../style/historyoverview.css';

function HistoryOverview() {
  const historyItems = [
    { date: '2024-01-15', event: 'Joined the community' },
    { date: '2024-02-20', event: 'Paid for 20 users' },
    { date: '2024-03-05', event: 'Added family members' },
    { date: '2024-05-15', event: 'Attended community event' },
  ];

  return (
    <div className="historyoverview_container">
      <h2 className="historyoverview_title">History Overview</h2>
      <div className="historyoverview_summary">
        <div className="historyoverview_item">
          <span className="historyoverview_label">Recent Events:</span>
          <span className="historyoverview_value">{historyItems.length}</span>
        </div>
        <ul className="historyoverview_list">
          {historyItems.map((item, index) => (
            <li key={index} className="historyoverview_event">
              <span className="historyoverview_event_date">{item.date}</span>
              <span className="historyoverview_event_description">{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HistoryOverview;