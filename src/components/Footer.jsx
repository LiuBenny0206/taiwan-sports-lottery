import React from "react";
import "./Footer.css";
import homeIcon from "../images/home.png";
import eventIcon from "../images/event.png";
import locationIcon from "../images/location.png";
import serviceIcon from "../images/customer-service.png";
import registerIcon from "../images/FirstLeftHeader.png";

function Footer() {
  return (
    <footer className="footer fixed bottom-0 left-0 w-full bg-yellow-300 text-black">
      <div className="flex justify-around items-center h-16">
        <div className="footer-left flex space-x-16 items-center">
          <a href="/" className="text-center">
            <img src={homeIcon} alt="Home Icon" className="footer-icon" />
            <span className="text-xs font-bold block mt-1">首頁</span>
          </a>
          <a href="/promotions" className="text-center">
            <img src={eventIcon} alt="Event Icon" className="footer-icon" />
            <span className="text-xs font-bold block mt-1">優惠</span>
          </a>
        </div>

        <div className="footer-center relative flex flex-col items-center">
          <div className="outline-of-register flex flex-col items-center justify-center">
            <a href="/register" className="text-center">
              <img
                src={registerIcon}
                alt="Register Icon"
                className="register-icon"
              />
            </a>
            <span className="text-xs text-red-500 font-bold mb-10">登入/註冊</span>
          </div>
        </div>

        <div className="footer-right flex space-x-16 items-center">
          <a href="/store" className="text-center">
            <img src={locationIcon} alt="Location Icon" className="footer-icon" />
            <span className="text-xs font-bold block mt-1">店面</span>
          </a>
          <a href="/support" className="text-center">
            <img src={serviceIcon} alt="Service Icon" className="footer-icon" />
            <span className="text-xs font-bold block mt-1">客服</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
