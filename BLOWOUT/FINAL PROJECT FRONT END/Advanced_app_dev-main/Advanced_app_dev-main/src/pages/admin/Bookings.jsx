import React from 'react';
import Dashboard from "../../components/admin/Dashboard";

export const Bookings = () => {
  return (
    <div>
      <Dashboard/>
      <div className="admin-contents " style={{marginLeft:"20%", marginTop:"-2%"}}>
        <p>Booking id    : 1234</p>
        <p>Name          : Dharshini</p>
        <p>Mail-id       : and@gmail.com</p>
        <p>Phone number  : 9876543201</p>
        <p>Event Date    : 21/02/2024</p>
        <p>Venue         : Coimbatore</p>
        <p>Package       : Silver</p>
        <p>Food          : Both veg and non-veg</p>
        <p>No of members : 15</p>
      </div>
    </div>
  );
};
