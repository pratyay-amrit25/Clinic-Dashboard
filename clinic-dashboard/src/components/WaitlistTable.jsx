import React from 'react';
import './WaitlistTable.css';

const WaitlistTable = ({ title, waitlist }) => {
  return (
    <div className="waitlist-table-container">
      <h4 className="waitlist-table-title">{title}</h4>
      <table className="waitlist-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Reason</th>
            <th>Added At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {waitlist.map((item) => (
            <tr key={item.id}>
              <td>{item.patient}</td>
              <td>{item.reason}</td>
              <td>{item.addedAt}</td>
              <td>
                <button className="action-btn admit-btn">Admit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WaitlistTable;
