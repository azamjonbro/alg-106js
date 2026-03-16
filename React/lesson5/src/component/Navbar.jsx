import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="header">
      <nav className="container nav">
        <div className="logobox">
          <NavLink to="/">Logo</NavLink>
        </div>
        <div className="linkbox">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="buttonbox">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
