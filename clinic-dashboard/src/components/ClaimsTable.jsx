import React from 'react';
import './ClaimsTable.css';

const ClaimsTable = ({ title, claims }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'status-approved';
      case 'pending':
        return 'status-pending';
      case 'rejected':
        return 'status-rejected';
      default:
        return '';
    }
  };

  return (
    <div className="claims-table-container">
      <h4 className="claims-table-title">{title}</h4>
      <table className="claims-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td>{claim.id}</td>
              <td>{claim.patient}</td>
              <td>${claim.amount.toLocaleString()}</td>
              <td>
                <span className={`status-badge ${getStatusClass(claim.status)}`}>
                  {claim.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimsTable;
