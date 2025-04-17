import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import leftFirstHeader from "../images/FirstLeftHeader.png";
import "./Header.css";

const menuItems = [
  { label: "首頁", path: "/" },
  { label: "好禮活動", path: "/promotions" },
  { label: "註冊教學", path: "/registration" },
  { label: "變更經銷商", path: "/change-retailer" },
  { label: "關於我們", path: "/about" },
];

function Header() {
  const location = useLocation();
  const isRegistrationPage = location.pathname === "/registration";
  const isAboutPage = location.pathname === "/about";

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 80) {
        setIsMenuVisible(currentScrollY < lastScrollY || currentScrollY <= 0);
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header 容器 */}
      <div
        className={`header-container
          ${!isMenuVisible ? "hidden" : ""}
          ${isRegistrationPage ? "registration-theme" : ""}
          ${isAboutPage ? "about-theme" : ""}`}
      >
        <Link to="/" className="header-left-logo">
          <img src={leftFirstHeader} alt="Header Logo" />
        </Link>

        {/* 桌面版按鈕 */}
        <div className="header-buttons">
          <a
            href="https://channel.sportslottery.com.tw/zh-tw/register/step1?retailerid=93179171"
            className="header-button"
          >
            會員註冊
          </a>
          <div className="divider"></div>
          <a
            href="https://member.sportslottery.com.tw/login"
            className="header-button"
          >
            會員登入
          </a>
          <div className="divider"></div>
          <a
            href="https://line.me/R/ti/p/@900vgrkj?oat_content=qr"
            className="header-button"
          >
            <span className="icon">📱</span> LINE會員專區
          </a>
        </div>

        {/* 漢堡按鈕 */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* 桌面版菜單：slide down */}
      <div
        ref={menuRef}
        className="menu-container"
        style={{
          transform: isMenuVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isMenuVisible ? "1" : "0",
          transition: "transform 0.5s ease, opacity 0.5s ease",
          overflow: "hidden",
        }}
      >
        <ul className="menu-list">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path} className="menu-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 手機版菜單 */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <button className="close-mobile-menu" onClick={toggleMobileMenu}>
          ×
        </button>
        <ul className="menu-list">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className="menu-item"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <a
            href="https://channel.sportslottery.com.tw/zh-tw/register/step1?retailerid=93179171"
            className="mobile-menu-button"
          >
            會員註冊
          </a>
          <a
            href="https://member.sportslottery.com.tw/login"
            className="mobile-menu-button"
          >
            會員登入
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
