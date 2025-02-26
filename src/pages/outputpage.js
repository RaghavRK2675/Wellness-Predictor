import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/outputpage.css";
import '../assets/styles/responsiveness.css'

const OutputPage = () => {
  const location = useLocation();
  const formData = location.state || {}; // Get form data from navigation

  return (
    <main className="main">
     
      <div className="heading">FINAL REPORT</div>
      <div className="main-content-for-output-page">
        
        {/* Report Section */}
        <div className="report">
          <div className="report-default-template">
            <p>Name: {formData.name || "N/A"}</p>
            <p>Age: {formData.age || "N/A"}</p>
            <p>BMI: {formData.bmi || "N/A"}</p>
            
          </div>
          <div className="report-dynamic-template">Dynamic Data</div>
        </div>

        {/* AI Corner */}
        <div className="ai-corner">
          <div className="ai-corner-heading">ASK AI<br />HOW TO CURE?</div>
          <div className="ai-prompt-box">AI Prompt Box</div>
          <div className="ai-response-box">AI Response Box</div>
        </div>

      </div>
    </main>
  );
};

export default OutputPage;
