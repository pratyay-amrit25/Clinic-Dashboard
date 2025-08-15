import React from 'react';
import { FaClock } from 'react-icons/fa';
import './MedsDue.css';

const MedsDue = ({ title, meds }) => {
  return (
    <div className="meds-due-container">
      <h4 className="meds-due-title">{title}</h4>
      <ul className="meds-due-list">
        {meds.map((med, index) => (
          <li key={index} className="med-item">
            <div className="med-details">
              <span className="med-patient">{med.patientName} (Room {med.room})</span>
              <span className="med-name">{med.medication}</span>
            </div>
            <div className="med-time">
              <FaClock /> {med.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedsDue;
