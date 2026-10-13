import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Footer from "./Footer";
import Promotions from "../pages/Promotions";
import Registration from "../pages/Registration";
import ChangeRetailer from "../pages/ChangeRetailer";
import About from "../pages/About";
import Member from "../pages/Member";
import './App.css';

// 會員中心以獨立 LIFF 頁面呈現，不顯示官網導覽列與頁尾。
// 其他原有官網頁面均保留相同 Header / Footer。
function AppLayout() {
  const location = useLocation();
  const isMemberPage = location.pathname === "/member";

  return (
    <div className={isMemberPage ? "member-app-layout" : "website-app-layout"}>
      {!isMemberPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/change-retailer" element={<ChangeRetailer />} />
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </main>
      {!isMemberPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
