import React from 'react';
import './ChartContainer.css';

const ChartContainer = ({ title, children }) => {
  return (
    <div className="chart-container">
      <h4 className="chart-title">{title}</h4>
      <div className="chart-content">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
