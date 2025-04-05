import React, { useState } from "react";
import "./ChangeRetailer.css";

/**
 * ChangeRetailer Component
 * --------------------------
 * 此組件提供一個標籤頁 (Tab) 介面，使用者可透過切換標籤來查看不同的變更資訊。
 *
 * 狀態：
 * - activeTab: 目前啟用的標籤 ID，用於決定顯示哪一頁內容。
 *
 * 資料來源：
 * - tabs: 定義所有標籤的 id 與顯示標籤名稱。
 * - tabContent: 依據標籤 id 對應的內容，包括標題、文字與連結。
 */
function ChangeRetailer() {
  // 管理目前活動的標籤，預設為 "intro"
  const [activeTab, setActiveTab] = useState("intro");

  // 標籤選單資料：每個物件包含標籤的 id 與顯示文字
  const tabs = [
    { id: "intro", label: "變更經銷商" },
    { id: "public", label: "變更電話" },
    { id: "concept", label: "變更信箱" },
    { id: "csr", label: "變更姓名" },
  ];

  // 每個標籤對應的內容，根據 activeTab 來顯示
  const tabContent = {
    intro: (
      <div className="content-card">
        <h2 className="section-title">變更經銷商方法</h2>
        <p className="content-text">
          提醒您：如有設定服務的運動彩券經銷商，須於六個月期滿後才可變更服務的經銷商
        </p>
        <ul className="content-list">
          <li>
            1. 請至會員變更資料申請網頁
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
          <li>2. 輸入會員代碼及完成手機簡訊驗證。</li>
          <li>
            3. 點選變更項目：「推薦您入會之經銷商證號」或「第三人使用個人資料同意事項」，完成後即變更。
          </li>
        </ul>
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
      <div className="content-card">
        <h2 className="section-title">變更姓名</h2>
        <ul className="content-list">
          <li>
            請於左側選單下載列印「台灣運動彩券線上通路會員入會暨資料異動申請書」並勾選「資料異動」。
          </li>
          <li>
            填寫紅框內相關資料並親筆簽名（更改後的「正確姓名」），請務必本人親簽。
          </li>
          <li>黏貼身分證正/反面影本或附上戶籍謄本（須有記事欄位）。</li>
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
  };

  return (
    <div className="change-container">
      {/* 頁面標題區 */}
      <div className="header">
        <h1 className="main-title">變更經銷商</h1>
        <div className="subtitle">Change Retailer</div>
      </div>

      {/* 標籤選單區 */}
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 根據 activeTab 渲染對應內容 */}
      <div className="content-section">{tabContent[activeTab]}</div>
    </div>
  );
}

export default ChangeRetailer;
