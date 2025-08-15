import React from 'react';
import './NewAppointmentForm.css';

const NewAppointmentForm = ({ doctors, onSubmit }) => {
  return (
    <form className="new-appointment-form">
      <div className="form-group">
        <label htmlFor="patientName">Patient Name</label>
        <input type="text" id="patientName" name="patientName" required />
      </div>
      <div className="form-group">
        <label htmlFor="doctor">Doctor</label>
        <select id="doctor" name="doctor" required>
          <option value="">Select a doctor</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.name}>
              {doc.name} - {doc.specialty}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="appointmentTime">Appointment Time</label>
        <input type="datetime-local" id="appointmentTime" name="appointmentTime" required />
      </div>
      <div className="form-group">
        <label htmlFor="reason">Reason for Visit</label>
        <textarea id="reason" name="reason" rows="3"></textarea>
      </div>
      <div className="form-actions">
        <button type="submit" className="action-btn submit-btn">Book Appointment</button>
      </div>
    </form>
  );
};

export default NewAppointmentForm;
