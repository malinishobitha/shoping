import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import HomePage from './components/home'; 
import ProductDetails from './components/ProductDetails';
import CustomerDetails from './components/customerDetails';
import PaymentDetails from './components/paymentDetails';
import Successful from './components/successful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/customerDetails" element={<CustomerDetails />} />
        <Route path="/paymentDetails" element={<PaymentDetails />} />
        <Route path="/successful" element={<Successful />} />

      </Routes>
    </Router>
  );
};

export default App;
