import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3001/register", { name, email, password })
        .then((res) => {
          navigate('/login');
        })
        .catch((err) => {
          console.error("Error registering user:", err);
        });
    };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="card p-4" style={{ width: "350px" }}>
        <h3 className="text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <div className="text-center mt-2">
          <small>Already Have an Account</small>
          <Link to="/login" className="btn btn-light w-100 mt-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
 