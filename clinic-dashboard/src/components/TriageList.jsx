import React from 'react';
import './TriageList.css';

const TriageList = ({ title, patients }) => {
  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  return (
    <div className="triage-list-container">
      <h4 className="triage-list-title">{title}</h4>
      <ul className="triage-list">
        {patients.map((patient) => (
          <li key={patient.id} className={`triage-item ${getPriorityClass(patient.priority)}`}>
            <div className="patient-info">
              <span className="patient-name">{patient.patientName}</span>
              <span className="patient-complaint">{patient.complaint}</span>
            </div>
            <div className="arrival-info">
              <span className="arrival-time">{patient.arrival}</span>
              <span className="priority-label">{patient.priority}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TriageList;
