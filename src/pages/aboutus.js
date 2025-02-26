import React from "react";
import "../assets/styles/aboutus.css";
import logo from '../assets/images/logo.png'

const AboutUs = () => {
  return (
    <main className="main">
      <img src={logo} />
      <div className="heading">ABOUT US</div>
      <div className="main-content-for-input-page-and-other-pages">
        <div className="main-content-writing">
          <div className="main-content-heading">
            We are a team of four passionate developers committed to leveraging technology for better healthcare.
          </div>
          <div className="main-content-description">
            &#11208; Ayushmann Bhattacharya – Leader of the Team (Tech: ReactJS, HTML, CSS, JavaScript)<br />
            &#11208; Aditya Chaudhary – Backend Developer & Database Manager (Tech: Python, Flask, MySQL)<br />
            &#11208; Karan Kumar – Machine Learning Engineer (Tech: Scikit-learn, TensorFlow, Pandas)<br />
            &#11208; Anmol – Data Analyst & Documentation Head (Tech: Power BI, Excel, SQL)
          </div>
          <div className="main-content-footer">
            Together, we developed an ML-based Early Prediction of Lifestyle Diseases system that analyzes user health data to predict risks and provide preventive recommendations. Our goal is to enable proactive healthcare through data-driven insights.
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
