import React, { useState } from 'react';
import '../style/support.css';  // Import CSS file for styling

const Support = ({ paymentLink }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div 
      className="support-container" 
      onMouseEnter={() => setShowOptions(true)} 
      onMouseLeave={() => setShowOptions(false)}
    >
      <h2>Support</h2>
      {showOptions && (
        <div className="options">
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">Donate</a>
          <a href="/volunteer" className="volunteer-link">Volunteer</a>
        </div>
      )}
    </div>
  );
};

export default Support;