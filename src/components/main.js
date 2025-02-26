import React from 'react'
import '../assets/styles/main.css'
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

const main = () => {
    return (
      <main className="main">
        <img src={logo}/>
        <div className="main-text-and-button-box">
          <div className="main-text">
            Gain deep insights into your health risks<br />
            Take charge of your well-being today!
          </div>
          <Link to="/inputpage" className="main-button">GET STARTED</Link>
        </div>
      </main>
    );
  };
  

export default main
