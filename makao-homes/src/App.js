import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/landing/Hero";
import Good from "./components/hands/Good";
import Featured from "./components/featured/Featured";
import You from "./components/you/You";
import Testimonial from "./components/testimony/Testimonial";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Good />
      <Featured />
      <You />
      <Testimonial />
    </>
  );
}

export default App;
