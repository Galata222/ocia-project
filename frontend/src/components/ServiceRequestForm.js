import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/servicerequest.css'
const courses = [
  "Web Development",
  "Full-Stack Development",
  "Custom Software Development",
  "Technical Support and Troubleshooting",
  "SaaS Development Consultation",
  "Logo and Branding Design",
  "Presentation Design",
  "IT and Software Training",
  "Graphics and Design Tutorial"
];

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nSelected Course: ${selectedCourse}`);
    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setSelectedCourse('');
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Service Request Form</h3>
      <form onSubmit={handleSubmit} className="request-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Select a service</label>
          <select
            className="form-select"
            id="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option value="">Choose a course...</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Request</button>
      </form>
    </div>
  );
};

export default RegistrationForm;