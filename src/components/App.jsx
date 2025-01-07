import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Footer from "./Footer";
import Promotions from "../pages/Promotions";
import Registration from "../pages/Registration";
import ChangeRetailer from "../pages/ChangeRetailer";
import About from "../pages/About";
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/change-retailer" element={<ChangeRetailer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
