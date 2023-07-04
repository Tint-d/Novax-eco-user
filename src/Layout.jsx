import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/herosection.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="hero-linear">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
