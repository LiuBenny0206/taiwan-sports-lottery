import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Promotions from "../pages/Promotions";
import Registration from "../pages/Registration";
import ChangeRetailer from "../pages/ChangeRetailer";
import About from "../pages/About";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/change-retailer" element={<ChangeRetailer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
