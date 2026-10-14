import React, { useState } from "react";
import {
  FiAward, FiClock, FiGift, FiFileText, FiShield, FiLock, FiCheckCircle,
  FiInfo, FiChevronRight, FiUser, FiAlertCircle
} from "react-icons/fi";
import "./Member.css";

// 第一階段只有模擬資料。正式上線前必須由後端驗證 LINE 身分、帳戶綁定及資料存取權限。
// 不要將真實會員姓名、會員編號、紅利或兌換紀錄寫在這個公開前端檔案。
const sample = {
  balance: 1680,
  pending: 240,
  totalEarned: 2280,
  transactions: [
    { id: "demo-01", date: "2026/09/05", name: "每月紅利入帳（示意）", amount: 1200, type: "plus" },
    { id: "demo-02", date: "2026/09/12", name: "兌換商品（示意）", amount: -600, type: "minus" },
    { id: "demo-03", date: "2026/10/05", name: "每月紅利入帳（示意）", amount: 1080, type: "plus" }
  ]
};
const fmt = (value) => new Intl.NumberFormat("zh-TW").format(value);

export default function Member() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="whm-page">
      <div className="whm-shell">
        <header className="whm-header">
          <div className="whm-brand">
            <span className="whm-brand-mark" aria-hidden="true">萬</span>
            <div>
              <strong>萬豪會員中心</strong>
              <span>WAN HAO MEMBER CENTER</span>
            </div>
          </div>
          <span className="whm-test-chip">展示版本</span>
        </header>

        <div className="whm-alert" role="status">
          <FiAlertCircle aria-hidden="true" />
          <p><strong>本頁僅供畫面測試。</strong>所有點數與紀錄都是模擬資料，尚未串接 LINE 登入或真實會員系統，請勿對外開放。</p>
        </div>

        <section className="whm-intro">
          <p className="whm-eyebrow">WELCOME TO WAN HAO</p>
          <h1>我的會員紅利</h1>
          <p>未來可從 LINE 直接查看紅利、禮券及兌換紀錄。</p>
        </section>

        <div className="whm-profile">
          <div className="whm-avatar"><FiUser aria-hidden="true" /></div>
          <div className="whm-profile-text">
            <strong>測試會員</strong>
            <span>會員身分尚未綁定 · 範例資料</span>
          </div>
          <FiShield className="whm-profile-shield" aria-hidden="true" />
        </div>

        <nav className="whm-tabs" aria-label="會員中心功能">
          {[
            { id: "overview", text: "紅利總覽", icon: <FiAward aria-hidden="true" /> },
            { id: "voucher", text: "我的禮券", icon: <FiGift aria-hidden="true" /> },
            { id: "history", text: "紅利紀錄", icon: <FiFileText aria-hidden="true" /> }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={tab === item.id ? "whm-tab is-active" : "whm-tab"}
              aria-current={tab === item.id ? "page" : undefined}
              onClick={() => setTab(item.id)}
            >
              {item.icon}<span>{item.text}</span>
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <div className="whm-panel" role="region" aria-label="紅利總覽">
            <div className="whm-balance-card">
              <div className="whm-balance-top">
                <span>目前可用紅利</span>
                <span className="whm-demo-tag">模擬資料</span>
              </div>
              <div className="whm-balance-value">{fmt(sample.balance)} <span>點</span></div>
              <p>1 點相當於 NT$1 商品或禮券兌換價值；不可兌現或作為投注金。</p>
              <button type="button" disabled className="whm-primary-action">
                兌換商品即將開放 <FiChevronRight aria-hidden="true" />
              </button>
            </div>

            <div className="whm-stats">
              <div className="whm-stat">
                <FiClock aria-hidden="true" />
                <span>待審核紅利</span>
                <strong>{fmt(sample.pending)} <small>點</small></strong>
              </div>
              <div className="whm-stat">
                <FiCheckCircle aria-hidden="true" />
                <span>累計獲得紅利</span>
                <strong>{fmt(sample.totalEarned)} <small>點</small></strong>
              </div>
            </div>

            <div className="whm-info-card">
              <h2><FiInfo aria-hidden="true" /> 紅利制度提醒</h2>
              <p>紅利依當月有效投注金額與會員優惠資格計算，經人工確認後入帳。實際點數以萬豪後台核准紀錄為準。</p>
              <p>紅利點數目前無使用期限，兌換所需點數依各商品公告為準。</p>
            </div>
          </div>
        )}

        {tab === "voucher" && (
          <div className="whm-panel" role="region" aria-label="我的禮券">
            <div className="whm-section-heading"><h2>禮券與入會禮</h2><span>示意畫面</span></div>
            <div className="whm-voucher-card">
              <div className="whm-voucher-icon"><FiGift aria-hidden="true" /></div>
              <div>
                <span className="whm-voucher-label">新會員入會禮</span>
                <h3>NT$600 禮券</h3>
                <p>實際領取資格、發放及兌換狀態將由會員後台確認。</p>
                <span className="whm-voucher-status">測試範例 · 未發放</span>
              </div>
            </div>
            <div className="whm-info-card"><h2><FiInfo aria-hidden="true" /> 禮券與紅利分開記錄</h2><p>NT$600 入會禮券不會自動計入紅利點數餘額。</p></div>
          </div>
        )}

        {tab === "history" && (
          <div className="whm-panel" role="region" aria-label="紅利紀錄">
            <div className="whm-section-heading"><h2>最近紅利紀錄</h2><span>模擬資料</span></div>
            <div className="whm-history-list">
              {sample.transactions.map((record) => (
                <div className="whm-history-item" key={record.id}>
                  <span className={"whm-history-icon " + record.type}>
                    {record.type === "plus" ? <FiAward aria-hidden="true" /> : <FiGift aria-hidden="true" />}
                  </span>
                  <div className="whm-history-details">
                    <strong>{record.name}</strong>
                    <span>{record.date}</span>
                  </div>
                  <strong className={"whm-history-amount " + record.type}>
                    {record.amount > 0 ? "+" : ""}{fmt(record.amount)} 點
                  </strong>
                </div>
              ))}
            </div>
            <p className="whm-history-note">正式版會依照已綁定會員的權限，從後端讀取真實紀錄。</p>
          </div>
        )}

        <div className="whm-security-note">
          <FiLock aria-hidden="true" />
          <span>正式開放前將加入 LINE 身分驗證、一次性綁定碼及後端權限檢查。</span>
        </div>
        <footer className="whm-footer">萬豪會員中心 · 測試展示版</footer>
      </div>
    </div>
  );
}
