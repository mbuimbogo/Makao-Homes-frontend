import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup";
import Forgot from "./components/Forgot"
import Contact from "./components/Contact"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />} /> 
        {/* <Route path="/" element={<Home />} /> */}
         <Route path="/signup" element={<Signup />} /> 
        <Route path="/resetpassword" element={<Forgot />} /> 
        <Route path="/contactus" element={<Contact />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;