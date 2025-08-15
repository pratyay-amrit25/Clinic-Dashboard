import React from 'react';
import { FaHeartbeat, FaThermometerHalf, FaWind } from 'react-icons/fa';
import './VitalsTracker.css';

const VitalsTracker = ({ title, patients }) => {
  return (
    <div className="vitals-tracker-container">
      <h4 className="vitals-tracker-title">{title}</h4>
      <div className="vitals-grid">
        {patients.map((patient) => (
          <div key={patient.patientId} className="vital-card">
            <div className="vital-card-header">
              <span className="patient-name">{patient.patientName}</span>
              <span className="patient-room">Room: {patient.room}</span>
            </div>
            <div className="vital-signs">
              <div className="vital-sign">
                <span className="vital-label">BP</span>
                <span className="vital-value">{patient.vitals.bp}</span>
              </div>
              <div className="vital-sign">
                <span className="vital-label">HR</span>
                <span className="vital-value">{patient.vitals.hr}</span>
              </div>
              <div className="vital-sign">
                <span className="vital-label">Temp</span>
                <span className="vital-value">{patient.vitals.temp}</span>
              </div>
              <div className="vital-sign">
                <span className="vital-label">SpO2</span>
                <span className="vital-value">{patient.vitals.spo2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitalsTracker;
