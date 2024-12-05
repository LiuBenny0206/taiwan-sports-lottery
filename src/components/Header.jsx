import React from "react";
import { Link } from "react-router-dom";
import headerBackground from "../images/header-background拷貝.png";
import leftFirstHeader from "../images/FirstLeftHeader.png";
import leftSecondHeader from "../images/SecondLeftHeader.png";
import './Header.css';

const menuItems = [
  { label: "首頁", path: "/" },
  { label: "好禮活動", path: "/promotions" },
  { label: "註冊教學", path: "/registration" },
  { label: "變更經銷商", path: "/change-retailer" },
  { label: "關於我們", path: "/about" },
];

function Header() {
  return (
    <div>
      {/* Header 上半部分 */}
      <div
        className="header-container"
        style={{
          backgroundImage: `url(${headerBackground})`,
        }}
      >
        {/* 左側 LOGO */}
        <div className="flex items-center">
          <Link to="/" className="inline-flex">
            <img
              src={leftFirstHeader}
              alt="First Header Logo"
              className="header-left-logo"
            />
          </Link>
          <Link to="/" className="inline-flex">
            <img
              src={leftSecondHeader}
              alt="Second Header Logo"
              className="header-right-logo"
            />
          </Link>
        </div>

        {/* 右側按鈕 */}
        <div className="header-buttons">
          <a
            href="https://channel.sportslottery.com.tw/zh-tw/register/step1?retailerid=93179171"
            className="header-button"
          >
            會員申請
          </a>
          <a href="https://member.sportslottery.com.tw/login" className="header-button">
            登入
          </a>
        </div>
      </div>

      {/* Header 菜單部分 */}
      <div className="menu-container">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
