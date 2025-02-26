import React from "react";
import "../assets/styles/mechanism.css";
import logo from '../assets/images/logo.png'

const mechanism = () => {
  return (
    <>
      
      <main className="main">
        <img src={logo}/>
        <div className="heading">HOW IT WORKS?</div>
        <div className="main-content-for-input-page-and-other-pages">
          <div className="main-content-writing">
            <div className="main-content-heading">
              The model leverages Machine Learning (ML) techniques to analyze
              user health data and predict the risk of lifestyle diseases.
              <br />Here’s how it works step by step:
            </div>
            <div className="main-content-description">
              &#11208; Data Collection – Users provide health details like BMI, activity
              level, diet, smoking, alcohol, BP, cholesterol, etc.
              <br />&#11208; Preprocessing – Data is cleaned, normalized, and encoded for
              ML processing.
              <br />&#11208; Model Training – A classification/regression model (e.g.,
              Logistic Regression, Random Forest, SVM) is trained using
              historical health data.
              <br />&#11208; Prediction & Risk Analysis – The model predicts disease
              risk (Low, Medium, High) based on user inputs.
              <br />&#11208; Preventive Recommendations – Personalized suggestions
              (e.g., diet, exercise, monitoring) help reduce disease risk.
              <br />&#11208; Continuous Learning – The model improves over time with
              new user data and wearable device integration.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default mechanism;
