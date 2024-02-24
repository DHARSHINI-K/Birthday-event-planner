import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authAdmin from '../../assets/authAdmin.svg';
import '../../assets/css/user/Signup.css';

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleMail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }

  const handlePwd = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }

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
    <div id="signup-box-main">
      <form className="signup-box" onSubmit={handleSubmit}>
        <h1 className="ask">Sign Up</h1>
        <br />
        <TextField onChange={handleMail} value={email} className="inp" label="Enter email" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-5%" }}>{formErrors.email}</p>
        <br />
        <TextField onChange={handlePwd} value={password} className="inp" type="name" label="Enter name" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.password}</p>
        <br />
        <TextField onChange={handlePwd} value={password} className="inp" type="password" label="Enter new password" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.password}</p>
        <br />
        <TextField onChange={handlePwd} value={password} className="inp" type="password" label="Confirm password" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.password}</p>
        <br />
        <Button
          type="submit"
          id="login-button"
          variant="contained"
          sx={{
            backgroundColor: '#8b008b', // Dark purple background color
            color: '#ffffff', // White text color
            '&:hover': {
              backgroundColor: '#6e0f7c', // Darker purple on hover
            },
          }}
        >
          Sign Up
        </Button>
      </form>
      <img className="login-girl" height={400} width={500} src={authAdmin} alt="Auth Admin" />
    </div>
  );
}
