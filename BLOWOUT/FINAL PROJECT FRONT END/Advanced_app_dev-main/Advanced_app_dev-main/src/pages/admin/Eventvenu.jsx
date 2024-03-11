import React from 'react';
import { Button, TextField } from "@mui/material";
import Dashboard from "../../components/admin/Dashboard";

export const Eventvenu = () => {
  return (
    <div>
      <Dashboard/>
      <div className="admin-contents event-venue">
        <div>
          <TextField label="Enter event"></TextField>
          <Button color="success" variant="contained">Add event</Button>
          <TextField label="Enter event"></TextField>
          <Button color="warning" variant="contained">Remove event</Button>
        </div>
        <br></br>
        <div className="event-list" style={{marginLeft:"20%"}}>
          <li>
            <p>Event list: </p>
            <ul>Popcorn stall</ul>
            <ul>Dance floor</ul>
            <ul>Musich show</ul>
            <ul>Magic show</ul>
            <ul>Designer entrance</ul>
          </li>
        </div>
        <br></br>
        <br></br>
        <div>
          <TextField label="Enter venue"></TextField>
          <Button color="success" variant="contained">Add Venue</Button>
          <TextField label="Enter venue"></TextField>
          <Button color="warning" variant="contained">Remove Venue</Button>
        </div>
        <div className="venue-list" style={{marginLeft:"20%"}}>
          <li>
            <p>Venue list: </p>
            <ul>Chennai</ul>
            <ul>Coimbatore</ul>
            <ul>Madurai</ul>
            <ul>Kanyakumari</ul>
          </li>
        </div>
      </div>
    </div>
  );
};
