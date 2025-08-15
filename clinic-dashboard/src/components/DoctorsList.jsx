import React from 'react';
import './DoctorsList.css';

const DoctorsList = ({ title, doctors }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'status-available';
      case 'busy':
        return 'status-busy';
      case 'on break':
        return 'status-on-break';
      default:
        return '';
    }
  };

  return (
    <div className="doctors-list-container">
      <h4 className="doctors-list-title">{title}</h4>
      <ul className="doctors-list">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="doctor-item">
            <div className="doctor-info">
              <span className="doctor-name">{doctor.name}</span>
              <span className="doctor-specialty">{doctor.specialty}</span>
            </div>
            <span className={`status-indicator ${getStatusClass(doctor.status)}`}>
              {doctor.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
