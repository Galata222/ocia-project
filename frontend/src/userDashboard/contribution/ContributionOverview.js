import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import '../../style/./contributionoverview.css';

function ContributionOverview() {
  const totalUsers = 100; 
  const paymentPerUser = 20; 
  const paidUsers = 20; 
  const initialRemainingUsers = totalUsers - paidUsers; 

  const [remainingUsers, setRemainingUsers] = useState(initialRemainingUsers);
  const totalPaid = paidUsers * paymentPerUser;

  useEffect(() => {
    
    const countdownTimer = setInterval(() => {
      setRemainingUsers(prev => {
       
        if (prev > 80) {
          return prev - 1;
        } else {
          clearInterval(countdownTimer);
          return prev; 
        }
      });
    }, 1000); 

    return () => clearInterval(countdownTimer);
  }, []);

  return (
    <div className="contributionoverview_container">
      <h2 className="contributionoverview_title">Contribution Overview</h2>
      <div className="contributionoverview_summary">
        <div className="contributionoverview_item">
          <span className="contributionoverview_label">Total Users:</span>
          <span className="contributionoverview_value">{totalUsers}</span>
        </div>
        <div className="contributionoverview_item">
          <span className="contributionoverview_label">Payment per User:</span>
          <span className="contributionoverview_value">${paymentPerUser}</span>
        </div>
        <div className="contributionoverview_item">
          <span className="contributionoverview_label">Remaining Users:</span>
          <span className="contributionoverview_value">{remainingUsers}</span>
        </div>
        <div className="contributionoverview_item">
          <span className="contributionoverview_label">Total Paid:</span>
          <span className="contributionoverview_value">
            <CountUp start={0} end={totalPaid} duration={2} prefix="$" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContributionOverview;