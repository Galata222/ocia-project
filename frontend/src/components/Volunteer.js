import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/customblue.css"; 
const VolunteerPage = () => {
  return (
    <div className="container-fluid custom-blue text-white p-5">
      <h1 className="text-center">Join Us as a Volunteer!</h1>
      <p className="text-center">
        Be a part of our mission to make a difference in the community.
      </p>
      <div className="volunteer_container d-flex justify-content-between mt-4">
        <div className="why-donate">
          <h2>Why you join us as volunteer ?</h2>
          <p>Your contributions help us provide essential services and support to those in need. Together, we can create lasting change in our community.</p>
          <ul className="donation-list">
            <li>Support one another in time of need</li>
            <li>Provide educational resources for those in need</li>
            <li>Empower individuals through skill training.</li>
            <li>Support new comers</li>
          </ul>
        </div>
        <div className="volunteer-form">
          <h2>Volunteer Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control custom-input" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control custom-input" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control custom-input" id="phone" required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control custom-input" id="address" required />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;