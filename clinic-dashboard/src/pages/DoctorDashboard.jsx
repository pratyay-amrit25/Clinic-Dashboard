import React, { useState } from 'react';
import PatientQueue from '../components/PatientQueue';
import MedicalHistory from '../components/MedicalHistory';
import Alerts from '../components/Alerts';
import Modal from '../components/Modal';
import { doctorData } from '../data/mockData';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const { patientQueue, medicalHistories, alerts } = doctorData;
  const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    setHistoryModalOpen(true);
  };

  const closeHistoryModal = () => {
    setHistoryModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <div className="doctor-dashboard">
      <Alerts title="Urgent Alerts" alerts={alerts} />
      <PatientQueue
        title="Today's Patient Queue"
        queue={patientQueue}
        onPatientSelect={handlePatientSelect}
      />

      {selectedPatient && (
        <Modal
          isOpen={isHistoryModalOpen}
          onClose={closeHistoryModal}
          title={`Medical History: ${selectedPatient.name}`}
        >
          <MedicalHistory
            patientName={selectedPatient.name}
            history={medicalHistories[selectedPatient.id]}
          />
        </Modal>
      )}
    </div>
  );
};

export default DoctorDashboard;
