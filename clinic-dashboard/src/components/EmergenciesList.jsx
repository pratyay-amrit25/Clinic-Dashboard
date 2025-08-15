import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import './EmergenciesList.css';

const EmergenciesList = ({ title, emergencies }) => {
  const getSeverityClass = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'severity-critical';
      case 'high':
        return 'severity-high';
      case 'medium':
        return 'severity-medium';
      default:
        return '';
    }
  };

  return (
    <div className="emergencies-list-container">
      <h4 className="emergencies-list-title">{title}</h4>
      <ul className="emergencies-list">
        {emergencies.map((emergency) => (
          <li key={emergency.id} className={`emergency-item ${getSeverityClass(emergency.severity)}`}>
            <div className="emergency-icon"><FaExclamationTriangle /></div>
            <div className="emergency-details">
              <span className="emergency-type">{emergency.type}</span>
              <span className="emergency-patient">Patient: {emergency.patient}</span>
              <span className="emergency-time">{emergency.time}</span>
            </div>
            <button className="action-btn find-doctor-btn">Find Doctor</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergenciesList;
