import React from 'react';
import Dashboard from "../../components/admin/Dashboard";

export const Customers = () => {
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <div style={{width:"20%",marginLeft:"0%", marginTop:"-2%"}}>
        <Dashboard/>
      </div>
      <div style={{width:"80%", marginTop:"6%"}}>
        <p>UserId: 1001</p>
        <p>Name : Dharshini</p>
        <p>Mail-id : dharshu@gmail.com</p>
        <p>Phone number : 9876543210</p>
        <br></br>
        <p>UserId: 1002</p>
        <p>Name : vaishnavi</p>
        <p>Mail-id : vaish@gmail.com</p>
        <p>Phone number : 9876543201</p>
        <br></br>
        <p>UserId: 1003</p>
        <p>Name : kavya</p>
        <p>Mail-id : kavya@gmail.com</p>
        <p>Phone number : 8765439210</p>
      </div>
    </div>
  );
};
