import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to="/register">Register</Link>
      </div>
    );
  };

export default Dashboard;
