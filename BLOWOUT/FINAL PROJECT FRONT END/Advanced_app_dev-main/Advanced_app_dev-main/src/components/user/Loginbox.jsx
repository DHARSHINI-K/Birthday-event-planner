import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../../assets/css/user/Login.css';
import birthdaylogin from '../../assets/birthdaylogin.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loginbox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const nav = useNavigate();

  const handleMail = (event) => {
    setEmail(event.target.value);
  };

  const handlePwd = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate({ email, password });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const data = {
        email,
        password
      }
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', data
        );
        console.log(response.data); // Handle successful login response
        
        if(response.status === 200){
          nav("/landing")
        } 
      } catch (error) {
        console.error('Login failed:', error.response.data); // Handle login failure
        // Display error message to the user
      }
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (values.email.length < 5) {
      errors.email = "Email invalid format";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    }

    return errors;
  };

  return (
    <div id="log-box-main">
      <form className="emp-box" onSubmit={handleSubmit}>
        <h1 className="ask">Sign In</h1>
        <br />
        <TextField
          onChange={handleMail}
          value={email}
          className="inp"
          label="Email*"
        />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-5%" }}>{formErrors.email}</p>
        <br />
        <TextField
          onChange={handlePwd}
          value={password}
          className="inp"
          type="password"
          label="Password*"
        />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.password}</p>
        <br />
        <p>New user? Register <Link to="/signup">here</Link></p>
        <br />
        <Button
          type="submit"
          id="login-button"
          variant="contained"
          style={{ backgroundColor: '#6e0f7c', color: '#ffffff' }} // Dark purple color
        >
          Log In
        </Button>
      </form>
      <img className="login-girl" height={400} width={500} src={birthdaylogin} alt="Login Girl" />
    </div>
  );
};

export default Loginbox;
