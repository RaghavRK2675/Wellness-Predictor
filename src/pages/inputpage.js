import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/form.css";
import logo from '../assets/images/logo.png'

const InputPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bmi: "",
    smoking: "no",
    alcohol: "no",
    physicalActivity: "sedentary",
    dietType: "balanced",
    sleepHours: "",
    stressLevel: "",
    bloodPressure: "",
    cholesterol: "",
    familyHistory: "none",
    bloodSugar: "",
    waistCircumference: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/outputpage", { state: formData });
  };

  return (
    <main className="main">
      <img src={logo}/>
      <div className="heading">ENTER YOUR DETAILS</div>
      <div className="main-content-for-input-page-and-other-pages">
        <form onSubmit={handleSubmit} className="form">
          {/* Text and Number Inputs */}
          {[
            { label: "Name", type: "text", name: "name", placeholder: "Enter Your Name" },
            { label: "Age", type: "number", name: "age", placeholder: "Enter Your Age" },
            { label: "BMI", type: "number", name: "bmi", placeholder: "Enter Your BMI", step: "0.1" },
            { label: "Sleep Hours", type: "number", name: "sleepHours", placeholder: "Enter Your Sleep Hours" },
            { label: "Stress Level (1-10)", type: "number", name: "stressLevel", placeholder: "Enter Your Stress Level", min: 1, max: 10 },
            { label: "Blood Pressure", type: "text", name: "bloodPressure", placeholder: "e.g., 120/80" },
            { label: "Cholesterol Level (mg/dL)", type: "number", name: "cholesterol", placeholder: "Enter Your Cholesterol" },
            { label: "Blood Sugar Level (mg/dL)", type: "number", name: "bloodSugar", placeholder: "Enter Your Blood Sugar" },
            { label: "Waist Circumference (cm)", type: "number", name: "waistCircumference", placeholder: "Enter Your Waist Circumference" }
          ].map(({ label, ...inputProps }) => (
            <div className="form-group" key={inputProps.name}>
              <div className="label-container">
                <label htmlFor={inputProps.name}>{label}:</label>
              </div>
              <div className="input-container">
                <input
                  {...inputProps}
                  id={inputProps.name}
                  value={formData[inputProps.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          ))}

          {/* Select Dropdowns */}
          {[
            { label: "Smoking", name: "smoking", options: ["No", "Occasionally", "Regularly"] },
            { label: "Alcohol Consumption", name: "alcohol", options: ["No", "Occasionally", "Regularly"] },
            { label: "Physical Activity", name: "physicalActivity", options: ["Sedentary", "Moderate", "Active"] },
            { label: "Diet Type", name: "dietType", options: ["Balanced", "High Protein", "High Carb", "Junk Food"] },
            { label: "Family History", name: "familyHistory", options: ["None", "Diabetes", "Hypertension", "Heart Disease"] }
          ].map(({ label, name, options }) => (
            <div className="form-group" key={name}>
              <div className="label-container">
                <label htmlFor={name}>{label}:</label>
              </div>
              <div className="input-container">
                <select id={name} name={name} value={formData[name]} onChange={handleChange} required>
                  {options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          
        
              <button type="submit" className="submit-button">SUBMIT</button>
        
          
        </form>
      </div>
    </main>
  );
};

export default InputPage;
