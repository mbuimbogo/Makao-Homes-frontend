

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} /> 
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/resetpassword" element={<Forgot />} /> */}
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;