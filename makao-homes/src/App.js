import React from "react";
import "react-icons/fa";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/landing/Hero";
import Good from "./components/hands/Good";
import Featured from "./components/featured/Featured";
import You from "./components/you/You";
import Testimonial from "./components/testimony/Testimonial";
import Footer from "./components/footer/Footer";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Good />
      <Featured />
      <You />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
