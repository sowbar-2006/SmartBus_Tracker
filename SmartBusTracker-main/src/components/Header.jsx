import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>🚍 Smart Bus Tracker</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/login"> Login</Link> | 
        <Link to="/signup"> Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
