import React, { useState } from "react";
import "./ChangeRetailer.css";

function ChangeRetailer() {
  // 定义当前激活的标签状态
  const [activeTab, setActiveTab] = useState("csr"); // 默认激活 "企業社會責任"

  // 标签内容映射
  const tabContent = {
    intro: (
      <div className="content-card">
        <h2 className="section-title">認識台灣彩券</h2>
        <p className="content-text">
          台灣彩券是全台唯一合法的公益彩券發行商，致力於透過公益投注為社會帶來更多正能量。
        </p>
      </div>
    ),
    public: (
      <div className="content-card">
        <h2 className="section-title">認識公益彩券</h2>
        <p className="content-text">
          每購買一張彩券，您不僅參與投注，還貢獻了公益基金，資助許多社會福利計劃。
        </p>
        <img
          src="https://example.com/public-welfare.jpg"
          alt="公益彩券"
          className="tab-image"
        />
      </div>
    ),
    concept: (
      <div className="content-card">
        <h2 className="section-title">品牌理念</h2>
        <p className="content-text">
          台灣彩券的品牌理念是「讓每一分投注，成為社會更多幸福的可能」。
        </p>
      </div>
    ),
    csr: (
      <div>
        {/* 企业社会责任内容 */}
        <div className="content-card">
          <h2 className="section-title">Environmental 環境</h2>
          <p className="content-text">
            通過ISO 14064-1、ISO 14001與ISO 50001三大國際環境標準驗證
          </p>
          <p className="content-text">
            台灣彩券公司於2018年通過ISO 14064-1溫室氣體盤查驗證，並於2019年度盤查據點至6個分公司，同時總公司亦通過ISO
            14001環境管理系統與ISO 50001能源管理系統標準，於2020年拓展盤查據點至6個分公司。
          </p>
        </div>

        <div className="content-card">
          <h2 className="section-title">
            推出「台灣彩券」APP服務，減少紙張使用及碳排放
          </h2>
          <p className="content-text">
            台灣彩券於2014年1月1日推出「台彩行動選號」APP，其「電子發票」功能以APP建構無紙化機票投注，取代傳統紙本選號單。
          </p>
          <p className="content-text">
            2023年底至12月止，全台透過APP投注的業績總量累積超過2,643.6萬筆，約節省881.2萬張紙（A4尺寸），有效減少碳排放。
          </p>
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
          認識台灣彩券
        </button>
        <button
          className={`tab-button ${activeTab === "public" ? "active" : ""}`}
          onClick={() => setActiveTab("public")}
        >
          認識公益彩券
        </button>
        <button
          className={`tab-button ${activeTab === "concept" ? "active" : ""}`}
          onClick={() => setActiveTab("concept")}
        >
          品牌理念
        </button>
        <button
          className={`tab-button ${activeTab === "csr" ? "active" : ""}`}
          onClick={() => setActiveTab("csr")}
        >
          企業社會責任
        </button>
      </div>

      {/* 动态内容区域 */}
      <div className="content-section">{tabContent[activeTab]}</div>
    </div>
  );
}

export default ChangeRetailer;
