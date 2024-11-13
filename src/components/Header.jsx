import React from "react";
import headerBackground from "../images/header-background拷貝.png";
import leftFirstHeader from "../images/FirstLeftHeader.png";
import leftSecondHeader from "../images/SecondLeftHeader.png";
import './Header.css';

function Header(props) {
  return (
    <div>
        <div 
            className="header-container"
            style={{
                backgroundImage: `url(${headerBackground})`,
            }}
        >
        {/* 左側圖片，點擊回到首頁 */}
        <div className="flex items-center">
            {/* 左側圖片，點擊回到首頁 */}
            <a href="/" className="inline-flex">
                <img
                src={leftFirstHeader}
                alt="First Header Logo"
                className="header-left-logo"
                />
            </a>
            <a href="/" className="inline-flex">
                <img
                src={leftSecondHeader}
                alt="Second Header Logo"
                className="header-right-logo"
                />
            </a>
        </div>
        {/* 右側按鈕 */}
        <div className="header-buttons">
            <a href="#" className="header-button">會員申請</a>
            <a href="#" className="header-button">登入</a>
        </div>
        </div>
         {/* 目錄 */}
            <div className="menu-container">
                <ul className="menu-list">
                <li>首頁</li>
                <li>好禮活動</li>
                <li>註冊教學</li>
                <li>變更經銷商</li>
                <li>關於我們</li>
                </ul>
            </div>
    </div>
  );
}

export default Header;
