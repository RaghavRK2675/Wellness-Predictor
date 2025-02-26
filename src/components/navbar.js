import React from 'react'
import '../assets/styles/navbar.css'
import '../assets/styles/responsiveness.css'
import logo2 from '../assets/images/logo_2.png'
import { Link } from "react-router-dom";

const navbar = () => {
    return (
      <header>
        <nav>
          
          <Link to="/mechanism" className="navbar-link">MECHANISM</Link>
          
          <Link to="/" className="navbar-logo-for-main-page"><img src={logo2} alt="Logo" /></Link>
          
          <Link to="/aboutus" className="navbar-link">ABOUT US</Link>
          
        </nav>
      </header>
    );
  };

export default navbar
