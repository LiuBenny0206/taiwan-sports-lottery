import React from "react";
import headerBackground from "../images/header-background拷貝.png";
import leftFirstHeader from "../images/FirstLeftHeader.png";
import leftSecondHeader from "../images/SecondLeftHeader.png";

function Header(props) {
  return (
    <div>
        <div 
        className="flex justify-between items-center h-32 px-8 py-4 bg-white shadow-md"
        style={{
            backgroundImage: `url(${headerBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        {/* 左側圖片，點擊回到首頁 */}
            <div className="flex items-center">
                <a href="https://example.com" className="inline-flex">
                    <img
                        src={leftFirstHeader}
                        alt="First Header Logo"
                        style={{
                        height: "110px", // 調整圖片高度
                        objectFit: "cover",
                        }}
                    />
                </a>
                <a href="https://example.com" className="inline-flex">
                    <img
                        src={leftSecondHeader}
                        alt="Second Header Logo"
                        style={{
                            width: "100%",  // 調整圖片寬度
                            height: "150px", // 調整圖片高度
                            objectFit: "cover",
                        }}
                    />
                </a>
            </div>
        {/* 右側按鈕 */}
            <div className="flex space-x-4">
                <a href="#" className="bg-white rounded px-4 py-2 text-black text-sm font-bold">會員申請</a>
                <a href="#" className="bg-white rounded px-4 py-2 text-black text-sm font-bold">登入</a>
            </div>
        </div>
        {/* 目錄 */}
        <div className="-mt-3.5">
            <ul className="flex space-x-4 justify-center items-center mx-48  gap-x-16 h-8 rounded-md bg-red-500 text-white text-xl font-bold">
                <li className="">首頁</li>
                <li className="">好禮活動</li>
                <li className="">註冊教學</li>
                <li className="">變更經銷商</li>
                <li className="">關於我們</li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
