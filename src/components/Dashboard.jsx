import React from 'react';
import '../resources/Dashboard.css'; // Create a CSS file for styling
import Navbar from './Navbar';
import Header from './Header';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="content">
          <h2><b>Welcome to NexusCRM Pro</b></h2>
          <h5>Empower Your Business with Seamless Customer Relationship Management</h5>
          <h4>
            At <b>NexusCRM Pro</b>, we understand the importance of strong and lasting customer relationships for the success of your business. Our comprehensive CRM solution is designed to streamline your customer interactions, boost efficiency, and elevate your overall business performance.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
