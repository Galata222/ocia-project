import React from 'react';
import '../style/Adminstyle/SubmittedRisk.css'

function SubmittedRisk() {
  const handleApprove = () => {
    // Handle the approve action
    alert('Risk Approved!');
  };

  const handleReject = () => {
    // Handle the reject action
    alert('Risk Rejected!');
  };

  return (
    <div className="submitted-risk-container">
      <div className="risk-info">
        <h2 className="risk-title">Risk Submitted</h2>
        <p className="risk-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula, arcu sit amet vehicula condimentum.
        </p>
      </div>
      <div className="action-buttons">
        <button className="approve-btn" onClick={handleApprove}>Approve</button>
        <button className="reject-btn" onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
}

export default SubmittedRisk;
