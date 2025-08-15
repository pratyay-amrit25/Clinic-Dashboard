import React from 'react';
import './MedicalHistory.css';

const MedicalHistory = ({ history, patientName }) => {
  if (!history) {
    return <div className="medical-history-container">No medical history found for this patient.</div>;
  }

  return (
    <div className="medical-history-container">
      <div className="history-section">
        <h5 className="section-title">Allergies</h5>
        <ul className="history-list">
          {history.allergies.map((allergy, index) => <li key={index}>{allergy}</li>)}
        </ul>
      </div>
      <div className="history-section">
        <h5 className="section-title">Current Medications</h5>
        <ul className="history-list">
          {history.medications.map((med, index) => <li key={index}>{med.name} ({med.dosage})</li>)}
        </ul>
      </div>
      <div className="history-section">
        <h5 className="section-title">Past Treatments</h5>
        <ul className="history-list">
          {history.pastTreatments.map((treatment, index) => (
            <li key={index}>
              <strong>{treatment.date}:</strong> {treatment.diagnosis} - {treatment.treatment}
            </li>
          ))}
        </ul>
      </div>
      <div className="history-section">
        <h5 className="section-title">Vitals & Notes</h5>
        <p><strong>BMI:</strong> {history.bmi}</p>
        <p><strong>Notes:</strong> {history.notes}</p>
      </div>
    </div>
  );
};

export default MedicalHistory;
