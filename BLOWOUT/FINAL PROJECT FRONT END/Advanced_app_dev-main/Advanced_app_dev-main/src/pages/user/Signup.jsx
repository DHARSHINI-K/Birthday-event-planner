import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authAdmin from '../../assets/authAdmin.svg';
import '../../assets/css/user/Signup.css';
import axios from "axios";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleMail = (event) => {
    setEmail(event.target.value);
  }

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePwd = (event) => {
    setPassword(event.target.value);
  }

  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  }

  const handleConfirmPwd = (event) => {
    setConfirmpassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate({ email, username, password, confirmpassword, mobileNumber });
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      const data = {
        email,
        password,
        name: username,
        mobileNumber,
        userRole: "user"
      }
      console.log(data);
      try {
        const res = await axios.post("http://localhost:8080/api/v1/auth/register", data);
        console.log(res.data); // Handle successful registration
        navigate('/');
      } catch (error) {
        console.error('Registration failed:', error.response.data); // Handle registration failure
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

    if (!values.username) {
      errors.username = "Username is Required";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is Required";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Passwords do not match";
    }

    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile Number is Required";
    } else if (!/^\d{10}$/.test(values.mobileNumber)) {
      errors.mobileNumber = "Invalid Mobile Number";
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
        <TextField name="email" onChange={handleMail} value={email} className="inp" label="Enter email" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-5%" }}>{formErrors.email}</p>
        <br />
        <TextField name="username" onChange={handleUsername} value={username} className="inp" type="name" label="Enter name" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.username}</p>
        <br />
        <TextField name="password" onChange={handlePwd} value={password} className="inp" type="password" label="Enter new password" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.password}</p>
        <br />
        <TextField name="confirmpassword" onChange={handleConfirmPwd} value={confirmpassword} className="inp" type="password" label="Confirm password" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.confirmpassword}</p>
        <br />
        <TextField name="mobileNumber" onChange={handleMobileNumber} value={mobileNumber} className="inp" label="Enter mobile number" required InputLabelProps={{ style: { color: '#8b008b' } }} />
        <p style={{ color: "brown", fontSize: "13px", marginLeft: "-43%" }}>{formErrors.mobileNumber}</p>
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
