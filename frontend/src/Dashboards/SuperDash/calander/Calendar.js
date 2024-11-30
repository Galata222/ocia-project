import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CalendarComponent.css';

const CalendarComponent = () => {
  const [dateState, setDateState] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const changeDate = (date) => {
    setDateState(date);
  };

  const markDate = () => {
    setAppointments((prev) => [...prev, moment(dateState).format('YYYY-MM-DD')]);
  };

  const isMarkedDate = (date) => {
    return appointments.includes(moment(date).format('YYYY-MM-DD'));
  };

  const navigate = (direction) => {
    const newDate = moment(dateState).add(direction, 'months').toDate();
    setDateState(newDate);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Appointment Calendar</h2>
      <div className="d-flex flex-column align-items-center">
        <Calendar 
          value={dateState}
          onChange={changeDate}
          tileClassName={({ date }) => isMarkedDate(date) ? 'marked' : null}
          className="w-100" // Ensures calendar takes full width
        />
        <p className="mt-3">
          Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b>
        </p>
        <div className="calendar-navigation mb-3">
          <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Previous</button>
          <button className="btn btn-secondary" onClick={() => navigate(1)}>Next</button>
        </div>
        <button className="btn btn-primary mb-3" onClick={markDate}>Mark Appointment</button>
        <h3>Marked Appointments:</h3>
        <ul className="list-group w-100">
          {appointments.map((appointment, index) => (
            <li key={index} className="list-group-item">
              {moment(appointment).format('MMMM Do YYYY')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComponent;