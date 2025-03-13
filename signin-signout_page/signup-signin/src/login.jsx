import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if(res.data){
          navigate("/home");
        }
        
      })
      .catch((err) => {
        console.error("Error registering user:", err);
      });
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-2">
          <small>Do't Have an Account</small>
          <Link to="/signup" className="btn btn-light w-100 mt-1">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
