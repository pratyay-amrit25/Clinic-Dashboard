import React from 'react';
import { FaDollarSign, FaUserPlus, FaUsers, FaClock, FaChartLine } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import TrendChart from '../components/TrendChart';
import UtilizationChart from '../components/UtilizationChart';
import ClaimsTable from '../components/ClaimsTable';
import Bottlenecks from '../components/Bottlenecks';
import { adminData } from '../data/mockData';
import './AdminDashboard.css';
const AdminDashboard = () => {
  const { revenue, patients, staff, insuranceClaims, operational, sales } = adminData;

  return (
    <div className="admin-dashboard">
      <div className="stats-grid">
        <StatCard
          title="Total Revenue (Last 6M)"
          value={`$${revenue.total.toLocaleString()}`}
          change={revenue.change}
          icon={<FaDollarSign />}
        />
        <StatCard
          title="Services Sold (Last 6M)"
          value={sales.total}
          change={sales.change}
          icon={<FaChartLine />}
        />
        <StatCard
          title="New Patients (This Month)"
          value={patients.new}
          icon={<FaUserPlus />}
        />
        <StatCard
          title="Returning Patients"
          value={patients.returning}
          icon={<FaUsers />}
        />
      </div>
      <div className="charts-grid">
        <TrendChart
          title="Revenue Trend"
          data={revenue.trend}
          dataKey="revenue"
          xAxisKey="name"
        />
        <UtilizationChart
          title="Staff Utilization"
          data={staff.byRole}
        />
        <TrendChart
          title="Sales Trend"
          data={sales.trend}
          dataKey="sales"
          xAxisKey="name"
        />
      </div>
      <div className="bottom-grid">
        <ClaimsTable
          title="Recent Insurance Claims"
          claims={insuranceClaims.claims}
        />
        <Bottlenecks
          title="Operational Bottlenecks"
          bottlenecks={operational.bottlenecks}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
