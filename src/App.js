import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import HomePage from './components/home';  // Import your HomePage component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is now common for all pages */}
      <Routes>
        {/* Define your route for HomePage */}
        <Route path="/" element={<HomePage />} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
