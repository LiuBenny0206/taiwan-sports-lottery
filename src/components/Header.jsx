import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import headerBackground from "../images/header-background拷貝.png";
import leftFirstHeader from "../images/FirstLeftHeader.png";
import './Header.css';

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
  const menuRef = useRef(null); // 用于获取菜单高度
  const [menuHeight, setMenuHeight] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsMenuVisible(false); // 隐藏菜单
    } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
      setIsMenuVisible(true); // 显示菜单
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // 监听滚动事件
    window.addEventListener("scroll", handleScroll);

    // 获取菜单实际高度
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {/* Header 上半部分 */}
      <div
        className="header-container"
        style={{
          backgroundImage: `url(${headerBackground})`,
        }}
      >
        <div className="flex items-center">
          <Link to="/" className="inline-flex">
            <img
              src={leftFirstHeader}
              alt="First Header Logo"
              className="header-left-logo"
            />
          </Link>
        </div>

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
            href="https://member.sportslottery.com.tw/login"
            className="header-button"
          >
            <span className="icon">👤</span> APP會員專區
          </a>
        </div>
      </div>

      {/* Header 菜单部分 */}
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
    </div>
  );
}

export default Header;
