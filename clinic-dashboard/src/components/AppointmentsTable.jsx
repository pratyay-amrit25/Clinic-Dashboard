import React from 'react';
import './AppointmentsTable.css';

const AppointmentsTable = ({ title, appointments, onRowClick }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'status-confirmed';
      case 'checked-in':
        return 'status-checked-in';
      case 'completed':
        return 'status-completed';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  return (
    <div className="appointments-table-container">
      <h4 className="appointments-table-title">{title}</h4>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((apt) => (
            <tr key={apt.id} className="clickable-row" onClick={() => onRowClick(apt)}>
              <td>{apt.time}</td>
              <td>{apt.patient.name}</td>
              <td>{apt.doctor}</td>
              <td>
                <span className={`status-badge ${getStatusClass(apt.status)}`}>
                  {apt.status}
                </span>
              </td>
              <td>
                {apt.status === 'Confirmed' && (
                  <button className="action-btn check-in-btn">Check In</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
