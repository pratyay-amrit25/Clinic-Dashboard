import React, { useState } from 'react';
import { FaSignInAlt, FaUserClock, FaCheckCircle, FaListAlt, FaPlus } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import AppointmentsTable from '../components/AppointmentsTable';
import WaitlistTable from '../components/WaitlistTable';
import Modal from '../components/Modal';
import DoctorsList from '../components/DoctorsList';
import EmergenciesList from '../components/EmergenciesList';
import NewAppointmentForm from '../components/NewAppointmentForm';
import { receptionistData } from '../data/mockData';
import './ReceptionistDashboard.css';

const ReceptionistDashboard = () => {
  const { todaysAppointments, waitlist, stats, doctors, emergencies } = receptionistData;
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [isNewApptModalOpen, setNewApptModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleRowClick = (appointment) => {
    setSelectedAppointment(appointment);
    setDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setDetailModalOpen(false);
    setSelectedAppointment(null);
  };

  const openNewApptModal = () => {
    setNewApptModalOpen(true);
  };

  const closeNewApptModal = () => {
    setNewApptModalOpen(false);
  };

  return (
    <div className="receptionist-dashboard">
      <div className="dashboard-header">
        <h3>Receptionist Dashboard</h3>
        <button className="action-btn new-appointment-btn" onClick={openNewApptModal}>
          <FaPlus /> New Appointment
        </button>
      </div>
      <div className="stats-grid">
        <StatCard
          title="Checked-In"
          value={stats.checkedIn}
          icon={<FaSignInAlt />}
        />
        <StatCard
          title="Confirmed"
          value={stats.confirmed}
          icon={<FaUserClock />}
        />
        <StatCard
          title="Completed"
          value={stats.completed}
          icon={<FaCheckCircle />}
        />
        <StatCard
          title="On Waitlist"
          value={stats.onWaitlist}
          icon={<FaListAlt />}
        />
      </div>
      <div className="receptionist-main-grid">
        <div className="appointments-section">
          <AppointmentsTable
            title="Today's Appointments"
            appointments={todaysAppointments}
            onRowClick={handleRowClick}
          />
        </div>
        <div className="side-panels">
          <EmergenciesList title="Active Emergencies" emergencies={emergencies} />
          <WaitlistTable title="Current Waitlist" waitlist={waitlist} />
          <DoctorsList title="Doctor Status" doctors={doctors} />
        </div>
      </div>

      {selectedAppointment && (
        <Modal
          isOpen={isDetailModalOpen}
          onClose={closeDetailModal}
          title="Appointment Details"
        >
          <AppointmentDetails appointment={selectedAppointment} />
        </Modal>
      )}

      <Modal
        isOpen={isNewApptModalOpen}
        onClose={closeNewApptModal}
        title="Create New Appointment"
      >
        <NewAppointmentForm doctors={doctors} />
      </Modal>
    </div>
  );
};

const AppointmentDetails = ({ appointment }) => (
  <div className="appointment-details">
    <p><strong>Patient:</strong> {appointment.patient.name} ({appointment.patient.age}, {appointment.patient.gender})</p>
    <p><strong>Time:</strong> {appointment.time}</p>
    <p><strong>Doctor:</strong> {appointment.doctor}</p>
    <p><strong>Reason:</strong> {appointment.reason}</p>
    <p><strong>Status:</strong> {appointment.status}</p>
  </div>
);

export default ReceptionistDashboard;
