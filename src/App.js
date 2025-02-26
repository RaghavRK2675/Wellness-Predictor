import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/responsiveness.css";
import Navbar from "./components/navbar.js";
import Main from "./components/main.js";
import InputPage from "./pages/inputpage.js"; // Import InputPage
import OutputPage from "./pages/outputpage.js"; // Import OutputPage
import Mechanism from "./pages/mechanism.js"; // Import Mechanism
import AboutUs from "./pages/aboutus.js"; // Import AboutUs

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will remain visible on all pages */}
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/inputpage" element={<InputPage />} />
        <Route path="/outputpage" element={<OutputPage />} />
        <Route path="/mechanism" element={<Mechanism />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
