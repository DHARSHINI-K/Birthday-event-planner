import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/admin/AdminDash.css';

export const Dashboard = () => {
  return (
    <div className="admin-dash">
      <img src="https://img.freepik.com/premium-photo/birthday-cake-with-candle-centerpiece-birthday-parties-ancient-greece-when-birth-artemis-goddess-moon-hunting-was-celebrated-time-they-prepared-round-cake_695181-1393.jpg" alt="Cake" />
      <div className="side-nav">
        <div className="nav-logo">
          BLOWOUT
        </div> {/* Add text as logo */}
        <Link to='/Customers'>Customers</Link>
        <Link to='/bookings'>Bookings</Link>
        <Link to='/event&venues'>Events & Venues</Link>
        <Link to='/admin'>Logout</Link>
      </div>
    </div>
  );
};
