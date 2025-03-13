import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./signup";
import Login from "./login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
