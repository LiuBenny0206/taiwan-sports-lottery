import React, { useState } from "react";
import "./ChangeRetailer.css";

function ChangeRetailer() {
  // 定义当前激活的标签状态
  const [activeTab, setActiveTab] = useState("intro"); // 默认激活 "企業社會責任"

  // 标签内容映射
  const tabContent = {
    intro: (
      <div>
      {/* 企业社会责任内容 */}
      <div className="content-card">
        <h2 className="section-title">變更經銷商方法</h2>
        <p className="content-text">
          提醒您：如有設定服務的運動彩券經銷商，須於六個月期滿後才可變更服務的經銷商
        </p>
        <ul className="content-list">
          <li>
            1.請至會員變更資料申請網頁
            <a
              href="https://modify.sportslottery.com.tw/zh-tw/Update/step1"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              （點選申請）
            </a>
            。
          </li>
          <li>2.輸入會員代碼及完成手機簡訊驗證。</li>
          <li>
            3.點選變更項目:「推薦您入會之經銷商證號」或「第三人使用個人資料同意事項」，完成後即變更。
          </li>
        </ul>
      </div>
    </div>
    ),
    public: (
      <div className="content-card">
        <h2 className="section-title">變更行動電話門號</h2>
        <ul className="content-list">
          <li>
            請於左側選單下載列印「台灣運動彩券線上通路會員入會暨資料異動申請書」並勾選「資料異動」。
          </li>
          <li>填寫紅框內相關資料並親筆簽名，請務必本人親簽。</li>
          <li>
            掃描/拍照以傳真：02-27151941，或 E-MAIL：
            <a href="mailto:service@sportslottery.com.tw" className="content-link">
              service@sportslottery.com.tw
            </a>
            ，或郵寄到本公司客服中心，我們將於收到您的申請資料後，盡快與您聯絡。
          </li>
        </ul>
      </div>
    ),
    concept: (
      <div className="content-card">
       <h2 className="section-title">變更電子郵件信箱</h2>
       <ul className="content-list">
        <li>
          請於左側選單下載列印「台灣運動彩券線上通路會員入會暨資料異動申請書」並勾選「資料異動」。
        </li>
        <li>填寫紅框內相關資料並親筆簽名，請務必本人親簽。</li>
        <li>
          掃描/拍照以傳真：02-27151941，或 E-MAIL：
          <a href="mailto:service@sportslottery.com.tw" className="content-link">
            service@sportslottery.com.tw
          </a>
          ，或郵寄到本公司客服中心，收件後約 7 個營業日完成。
        </li>
       </ul>
      </div>
    ),
    csr: (
      <div>
        {/* 企业社会责任内容 */}
        <div className="content-card">
          <h2 className="section-title">變更姓名</h2>
          <ul className="content-list">
            <li>
              請於左側選單下載列印「台灣運動彩券線上通路會員入會暨資料異動申請書」並勾選「資料異動」。
            </li>
            <li>
              填寫紅框內相關資料並親筆簽名（更改後的「正確姓名」），請務必本人親簽。
            </li>
            <li>
              黏貼身分證正/反面影本或附上戶籍謄本（須有記事欄位）。
            </li>
            <li>
              掃描/拍照以傳真：02-27151941，或 E-MAIL：
              <a href="mailto:service@sportslottery.com.tw" className="content-link">
                service@sportslottery.com.tw
              </a>
              ，或郵寄到本公司客服中心，我們將於收到您的申請資料後，盡快與您聯絡。
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <div className="change-container">
      {/* 标题栏 */}
      <div className="header">
        <h1 className="main-title">變更經銷商</h1>
        <div className="subtitle">Change Retailer</div>
      </div>

      {/* 标签导航栏 */}
      <div className="nav-tabs">
        <button
          className={`tab-button ${activeTab === "intro" ? "active" : ""}`}
          onClick={() => setActiveTab("intro")}
        >
          變更經銷商
        </button>
        <button
          className={`tab-button ${activeTab === "public" ? "active" : ""}`}
          onClick={() => setActiveTab("public")}
        >
          變更電話
        </button>
        <button
          className={`tab-button ${activeTab === "concept" ? "active" : ""}`}
          onClick={() => setActiveTab("concept")}
        >
          變更信箱
        </button>
        <button
          className={`tab-button ${activeTab === "csr" ? "active" : ""}`}
          onClick={() => setActiveTab("csr")}
        >
          變更姓名
        </button>
      </div>

      {/* 动态内容区域 */}
      <div className="content-section">{tabContent[activeTab]}</div>
    </div>
  );
}

export default ChangeRetailer;
