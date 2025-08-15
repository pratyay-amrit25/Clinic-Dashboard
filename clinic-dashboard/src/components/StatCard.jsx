import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  return (
    <div className="stat-card">
      <div className="stat-card-icon">
        {icon}
      </div>
      <div className="stat-card-info">
        <p className="stat-card-title">{title}</p>
        <h3 className="stat-card-value">{value}</h3>
        {change !== undefined && (
          <p className={`stat-card-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '▲' : '▼'} {Math.abs(change)}%
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
