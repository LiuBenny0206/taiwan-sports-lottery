import React, { useState } from "react";
import "./ChangeRetailer.css";

function ChangeRetailer() {
  const [activeTab, setActiveTab] = useState("retailer");

  const tabs = [
    {
      id: "retailer",
      label: "變更經銷商",
    },
    {
      id: "phone",
      label: "變更電話",
    },
    {
      id: "email",
      label: "變更信箱",
    },
    {
      id: "name",
      label: "變更姓名",
    },
  ];

  const tabContent = {
    retailer: {
      title: "變更經銷商",
      subtitle: "推薦經銷商資料異動",
      notice:
        "如有設定服務的運動彩券經銷商，須於六個月期滿後，才可變更服務經銷商。",
      steps: [
        <>
          前往台灣運彩會員變更資料申請網頁
          <a
            href="https://modify.sportslottery.com.tw/zh-tw/Update/step1"
            target="_blank"
            rel="noopener noreferrer"
            className="change-link"
          >
            前往申請
          </a>
        </>,
        <>輸入會員代碼，並完成手機簡訊驗證。</>,
        <>
          點選變更項目
          <strong>
            「推薦您入會之經銷商證號」
          </strong>
          或
          <strong>
            「第三人使用個人資料同意事項」
          </strong>
          ，依頁面指示完成變更。
        </>,
      ],
    },

    phone: {
      title: "變更行動電話門號",
      subtitle: "會員聯絡資料異動",
      steps: [
        <>
          下載並列印
          <strong>
            「台灣運動彩券線上通路會員入會暨資料異動申請書」
          </strong>
          ，並勾選「資料異動」。
        </>,
        <>
          填寫相關資料並親筆簽名，
          <strong>申請人須本人親簽。</strong>
        </>,
        <>
          將申請書掃描或拍照後，可選擇以下任一方式送件：
          <div className="contact-box">
            <div>
              <span>傳真</span>
              <strong>02-27151941</strong>
            </div>

            <div>
              <span>E-mail</span>
              <a
                href="mailto:service@sportslottery.com.tw"
                className="change-link inline"
              >
                service@sportslottery.com.tw
              </a>
            </div>
          </div>
          台灣運彩收到申請資料後，將盡快與您聯絡。
        </>,
      ],
    },

    email: {
      title: "變更電子郵件信箱",
      subtitle: "會員聯絡資料異動",
      steps: [
        <>
          下載並列印
          <strong>
            「台灣運動彩券線上通路會員入會暨資料異動申請書」
          </strong>
          ，並勾選「資料異動」。
        </>,
        <>
          填寫相關資料並親筆簽名，
          <strong>申請人須本人親簽。</strong>
        </>,
        <>
          將申請書掃描或拍照後，可選擇以下任一方式送件：
          <div className="contact-box">
            <div>
              <span>傳真</span>
              <strong>02-27151941</strong>
            </div>

            <div>
              <span>E-mail</span>
              <a
                href="mailto:service@sportslottery.com.tw"
                className="change-link inline"
              >
                service@sportslottery.com.tw
              </a>
            </div>
          </div>
          收到申請資料後，約
          <strong> 7 個營業日 </strong>
          完成。
        </>,
      ],
    },

    name: {
      title: "變更姓名",
      subtitle: "會員身分資料異動",
      steps: [
        <>
          下載並列印
          <strong>
            「台灣運動彩券線上通路會員入會暨資料異動申請書」
          </strong>
          ，並勾選「資料異動」。
        </>,
        <>
          填寫相關資料及變更後的正確姓名，
          並由
          <strong>本人親筆簽名。</strong>
        </>,
        <>
          黏貼身分證正、反面影本，
          或附上
          <strong>含記事欄位之戶籍謄本。</strong>
        </>,
        <>
          將完整申請資料以傳真、E-mail
          或郵寄方式送至台灣運彩客服中心。
          <div className="contact-box">
            <div>
              <span>傳真</span>
              <strong>02-27151941</strong>
            </div>

            <div>
              <span>E-mail</span>
              <a
                href="mailto:service@sportslottery.com.tw"
                className="change-link inline"
              >
                service@sportslottery.com.tw
              </a>
            </div>
          </div>
        </>,
      ],
    },
  };

  const currentContent =
    tabContent[activeTab];

  return (
    <section className="change-container">

      <div className="change-inner">

        {/* 頁面標題 */}
        <header className="change-header">
          <span className="change-eyebrow">
            MEMBER SERVICE
          </span>

          <h1>會員資料變更</h1>

          <p>
            選擇您需要異動的項目，
            依步驟完成申請即可。
          </p>
        </header>

        {/* Tabs */}
        <div
          className="change-tabs"
          role="tablist"
          aria-label="會員資料變更項目"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={
                activeTab === tab.id
              }
              className={`change-tab ${
                activeTab === tab.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab(tab.id)
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 內容 */}
        <div className="change-content-card">

          <div className="change-content-header">
            <div>
              <span className="change-content-label">
                申請項目
              </span>

              <h2>
                {currentContent.title}
              </h2>

              <p>
                {currentContent.subtitle}
              </p>
            </div>
          </div>

          {/* 提醒 */}
          {currentContent.notice && (
            <div className="change-notice">
              <div className="notice-icon">
                !
              </div>

              <div>
                <strong>申請前提醒</strong>
                <p>
                  {currentContent.notice}
                </p>
              </div>
            </div>
          )}

          {/* 步驟 */}
          <div className="change-steps">
            <h3>申請步驟</h3>

            <ol>
              {currentContent.steps.map(
                (step, index) => (
                  <li key={index}>
                    <div className="step-number">
                      {index + 1}
                    </div>

                    <div className="step-content">
                      {step}
                    </div>
                  </li>
                )
              )}
            </ol>
          </div>

        </div>

        <div className="change-footer-note">
          實際申請流程及資格，
          依台灣運彩官方公告為準。
        </div>

      </div>
    </section>
  );
}

export default ChangeRetailer;