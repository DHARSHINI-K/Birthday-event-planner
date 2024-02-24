
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../../assets/css/user/Login.css';
import birthdaylogin from '../../assets/birthdaylogin.svg';
import { useNavigate, Link } from 'react-router-dom';

const Loginbox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleMail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  
  const handlePwd = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate({ email, password });
    setFormErrors(errors);
  
    if (isSubmit) {
      navigate('/landing');
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
  
    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);

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
