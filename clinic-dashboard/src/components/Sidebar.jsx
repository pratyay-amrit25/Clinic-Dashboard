import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import { globalData } from '../data/mockData';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const showSearch = ['/admin', '/receptionist'].includes(location.pathname) || location.pathname === '/';

  const handleResultClick = (result) => {
    console.log('Search result clicked:', result);
    // In a real app, this would likely open a detail modal or navigate to a profile page
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Clinic Dashboard</h2>
      </div>
      {showSearch && (
        <div className="sidebar-search">
          <Search data={globalData} onResultClick={handleResultClick} />
        </div>
      )}
      <nav className="sidebar-nav">
        <NavLink to="/admin" className="nav-link">Admin</NavLink>
        <NavLink to="/receptionist" className="nav-link">Receptionist</NavLink>
        <NavLink to="/doctor" className="nav-link">Doctor</NavLink>
        <NavLink to="/nurse" className="nav-link">Nurse</NavLink>
      </nav>
      <div className="sidebar-footer">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
