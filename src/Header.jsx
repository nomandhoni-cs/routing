import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const headerStyle = {
    margin: "0 auto",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };
  return (
    <div className="header" style={headerStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Header;
