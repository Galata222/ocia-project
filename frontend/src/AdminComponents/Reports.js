import React from 'react';
import '.././style/Adminstyle/Reports.css'; 


function Reports() {
  return (
    <div className="reports-container">
      <div className="card">
        <div className="card-header">Report 1</div>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Report 2</div>
        <div className="card-body">
          <p>Vestibulum vehicula, arcu sit amet vehicula condimentum.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Report 3</div>
        <div className="card-body">
          <p>Morbi ac venenatis arcu. Donec id orci a nulla volutpat vehicula.</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
