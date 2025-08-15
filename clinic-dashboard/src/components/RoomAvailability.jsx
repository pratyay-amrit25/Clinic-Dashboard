import React from 'react';
import { FaBed } from 'react-icons/fa';
import './RoomAvailability.css';

const RoomAvailability = ({ title, rooms }) => {
  const percentage = Math.round((rooms.occupied / rooms.total) * 100);

  return (
    <div className="room-availability-container">
      <h4 className="room-availability-title">{title}</h4>
      <div className="room-stats">
        <div className="room-stat">
          <span className="stat-value">{rooms.available}</span>
          <span className="stat-label">Available</span>
        </div>
        <div className="room-stat">
          <span className="stat-value">{rooms.occupied}</span>
          <span className="stat-label">Occupied</span>
        </div>
        <div className="room-stat">
          <span className="stat-value">{rooms.total}</span>
          <span className="stat-label">Total</span>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="percentage-label">{percentage}% Occupancy</div>
    </div>
  );
};

export default RoomAvailability;
