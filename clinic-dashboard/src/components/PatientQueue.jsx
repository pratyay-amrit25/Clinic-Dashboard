import React from 'react';
import './PatientQueue.css';

const PatientQueue = ({ title, queue, onPatientSelect }) => {
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'waiting':
                return 'status-waiting';
            case 'in consultation':
                return 'status-in-consultation';
            case 'completed':
                return 'status-completed';
            default:
                return '';
        }
    };

    return (
        <div className="patient-queue-container">
            <h4 className="patient-queue-title">{title}</h4>
            <table className="patient-queue-table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Reason for Visit</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {queue.map((patient) => (
                        <tr key={patient.id} onClick={() => onPatientSelect(patient)} className="clickable-row">
                            <td>{patient.time}</td>
                            <td>{patient.name}</td>
                            <td>{patient.reason}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(patient.status)}`}>
                                    {patient.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientQueue;
