import React from 'react';
import { FaTrafficLight } from 'react-icons/fa';
import './Bottlenecks.css';

const Bottlenecks = ({ title, bottlenecks }) => {
  return (
    <div className="bottlenecks-container">
      <h4 className="bottlenecks-title">{title}</h4>
      <ul className="bottlenecks-list">
        {bottlenecks.map((item, index) => (
          <li key={index} className="bottleneck-item">
            <div className="bottleneck-icon"><FaTrafficLight /></div>
            <div className="bottleneck-details">
              <span className="bottleneck-metric">{item.metric}</span>
              <span className="bottleneck-value">{item.value}</span>
              {item.department && <span className="bottleneck-extra">Dept: {item.department}</span>}
              {item.details && <span className="bottleneck-extra">{item.details}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bottlenecks;
