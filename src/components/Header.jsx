import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import headerBackground from "../images/header-background拷貝.png";
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
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setIsMenuVisible(currentScrollY < lastScrollY || currentScrollY <= 0);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header 容器 */}
      <div
        className={`header-container ${!isMenuVisible ? "hidden" : ""}`}
      >
        <Link to="/" className="header-left-logo">
          <img src={leftFirstHeader} alt="Header Logo" />
        </Link>

        {/* 桌面版按鈕 */}
        <div className="header-buttons">
          <a href="#" className="header-button">會員註冊</a>
          <div className="divider"></div>
          <a href="#" className="header-button">會員登入</a>
          <div className="divider"></div>
          <a href="#" className="header-button">
            <span className="icon">👤</span> APP會員專區
          </a>
        </div>

        {/* 漢堡按鈕 */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* 桌面版菜單 */}
      <div
        ref={menuRef}
        className="menu-container"
        style={{
          maxHeight: isMenuVisible ? `${menuHeight}px` : "0",
          opacity: isMenuVisible ? "1" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.5s ease",
        }}
      >
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
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
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="menu-item" onClick={toggleMobileMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 新增手機會員註冊與登入按鈕 */}
        <div className="mobile-menu-footer">
          <a href="#" className="mobile-menu-button">會員註冊</a>
          <a href="#" className="mobile-menu-button">會員登入</a>
        </div>
      </div>
    </>
  );
}

export default Header;
