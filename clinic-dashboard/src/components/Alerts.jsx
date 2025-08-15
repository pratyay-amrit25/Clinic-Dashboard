import React from 'react';
import { FaExclamationTriangle, FaBell } from 'react-icons/fa';
import './Alerts.css';

const Alerts = ({ title, alerts }) => {
  const getAlertIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'emergency':
        return <FaExclamationTriangle />;
      case 'lab report':
        return <FaBell />;
      default:
        return <FaBell />;
    }
  };

  const getSeverityClass = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'severity-critical';
      case 'high':
        return 'severity-high';
      default:
        return 'severity-medium';
    }
  };

  return (
    <div className="alerts-container">
      <h4 className="alerts-title">{title}</h4>
      <ul className="alerts-list">
        {alerts.map((alert) => (
          <li key={alert.id} className={`alert-item ${getSeverityClass(alert.severity)}`}>
            <div className="alert-icon">{getAlertIcon(alert.type)}</div>
            <div className="alert-message">{alert.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
