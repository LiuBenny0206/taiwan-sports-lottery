// src/pages/Home.jsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

import Sample1 from "../images/sample1.png";
import Sample2 from "../images/sample2.png";
import Sample3 from "../images/sample3.png";

import SmallSample1 from "../images/smallsample1.png";
import SmallSample2 from "../images/smallsample2.png";
import SmallSample3 from "../images/smallsample3.png";

import Warning from "../images/warning.jpg";


// ======================================================
// 基本網址
// ======================================================

const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/leyinglottery";

const REGISTER_URL =
  "https://channel.sportslottery.com.tw/zh-tw/register/step1?retailerid=93179171";

const TRANSFER_URL =
  "https://transfer.sportslottery.com.tw/zh-tw/transfer/step1?thirdrid=93179171";

const GOOGLE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=24.1658418,120.7004771";


// ======================================================
// Carousel
// ======================================================

function Carousel() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/promotions");
  };

  return (
    <div className="hero-carousel">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {/* 第一張 */}
          <div
            className="carousel-item active"
            data-bs-interval="8000"
            onClick={handleClick}
          >
            <img
              src={Sample1}
              className="d-block w-100"
              alt="促銷活動 1"
            />
          </div>


          {/* 第二張 */}
          <div
            className="carousel-item"
            data-bs-interval="8000"
            onClick={handleClick}
          >
            <img
              src={Sample2}
              className="d-block w-100"
              alt="促銷活動 2"
            />
          </div>


          {/* 第三張 */}
          <div
            className="carousel-item"
            data-bs-interval="8000"
            onClick={handleClick}
          >
            <img
              src={Sample3}
              className="d-block w-100"
              alt="促銷活動 3"
            />
          </div>

        </div>


        {/* 上一張 */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />

          <span className="visually-hidden">
            Previous
          </span>
        </button>


        {/* 下一張 */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          />

          <span className="visually-hidden">
            Next
          </span>
        </button>

      </div>
    </div>
  );
}


// ======================================================
// Facebook 卡片
// ======================================================

function FacebookCard() {
  return (
    <motion.div
      className="facebook-card"
      initial={{
        opacity: 0,
        x: 18,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.55,
      }}
    >

      {/* Facebook 藍色品牌區 */}
      <div className="facebook-card-top">

        <div className="facebook-brand-row">

          <div className="facebook-logo-circle">
            f
          </div>

          <div className="facebook-brand-text">

            <span>
              FACEBOOK 粉絲專頁
            </span>

            <h2>
              樂穎彩券行
            </h2>

            <p>
              最新活動與門市消息
            </p>

          </div>

        </div>


        {/* 裝飾 */}
        <div className="facebook-decoration facebook-decoration-one" />
        <div className="facebook-decoration facebook-decoration-two" />

      </div>


      {/* 白色內容區 */}
      <div className="facebook-card-body">

        <div className="facebook-title-block">

          <h3>
            關注樂穎彩券行
          </h3>



        </div>


        {/* 三個大型資訊列 */}
        <div className="facebook-feature-list">

          <div className="facebook-feature-item">

            <span className="facebook-feature-number">
              01
            </span>

            <div>

              <strong>
                最新優惠活動
              </strong>

              <small>
                第一時間掌握會員優惠
              </small>

            </div>

          </div>


          <div className="facebook-feature-item">

            <span className="facebook-feature-number">
              02
            </span>

            <div>

              <strong>
                運彩最新資訊
              </strong>

              <small>
                查看最新活動與相關消息
              </small>

            </div>

          </div>


          <div className="facebook-feature-item">

            <span className="facebook-feature-number">
              03
            </span>

            <div>

              <strong>
                樂穎門市公告
              </strong>

              <small>
                營業與重要公告即時更新
              </small>

            </div>

          </div>

        </div>


        {/* Facebook 按鈕 */}
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-main-button"
        >

          <span className="facebook-small-logo">
            f
          </span>

          <span>
            前往 Facebook 粉絲專頁
          </span>

          <span className="button-arrow">
            →
          </span>

        </a>

      </div>

    </motion.div>
  );
}


// ======================================================
// 會員按鈕
// ======================================================

function MemberActions() {
  return (
    <div className="member-actions">

      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="member-button member-button-primary"
      >

        <span className="member-button-label">
          NEW MEMBER
        </span>

        <strong>
          申請成為會員
        </strong>

        <span className="member-arrow">
          →
        </span>

      </a>


      <a
        href={TRANSFER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="member-button member-button-secondary"
      >

        <span className="member-button-label">
          TRANSFER
        </span>

        <strong>
          二轉三屆會員
        </strong>

        <span className="member-arrow">
          →
        </span>

      </a>

    </div>
  );
}


// ======================================================
// 快速服務
// ======================================================

function QuickServices() {
  return (
    <div className="quick-services">

      {/* 網路會員 */}
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="service-card"
        aria-label="網路會員註冊"
      >
        <img
          src={SmallSample1}
          alt="網路會員募集"
        />
      </a>


      {/* Facebook */}
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="service-card"
        aria-label="Facebook 粉絲專頁"
      >
        <img
          src={SmallSample2}
          alt="Facebook 粉絲專頁"
        />
      </a>


      {/* 優惠活動 */}
      <Link
        to="/promotions"
        className="service-card"
        aria-label="查看優惠活動"
      >
        <img
          src={SmallSample3}
          alt="優惠活動"
        />
      </Link>

    </div>
  );
}


// ======================================================
// Google Map
// ======================================================

function GoogleMap() {
  return (
    <div className="google-map">

      <iframe
        title="樂穎彩券行位置"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.167955096296!2d120.7004771!3d24.1658418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917e4cb56b453%3A0x5e9d44239426e393!2z5a-M5q-U5aSa5p2x5YWJ5bqX!5e0!3m2!1szh-TW!2stw!4v1738571339417!5m2!1szh-TW!2stw"
        width="100%"
        height="100%"
        style={{
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>
  );
}


// ======================================================
// 門市資訊
// ======================================================

function StoreInfo() {
  return (
    <div className="store-info">

      <span className="section-eyebrow">
        VISIT US
      </span>

      <h2>
        歡迎來店
      </h2>

      <p className="store-description">
        想了解最新活動、會員服務或運彩資訊，
        歡迎直接來店詢問。
      </p>


      <div className="store-info-list">

        {/* 地址 */}
        <div className="store-info-row">

          <span className="store-info-number">
            01
          </span>

          <div>

            <small>
              ADDRESS
            </small>

            <strong>
              台中市北屯區東光路 726 號
            </strong>

          </div>

        </div>


        {/* 電話 */}
        <div className="store-info-row">

          <span className="store-info-number">
            02
          </span>

          <div>

            <small>
              PHONE
            </small>

            <a href="tel:0422313003">
              04-2231-3003
            </a>

          </div>

        </div>


        {/* 服務 */}
        <div className="store-info-row">

          <span className="store-info-number">
            03
          </span>

          <div>

            <small>
              SERVICE
            </small>

            <strong>
              運動彩券・會員服務
            </strong>

          </div>

        </div>

      </div>


      <a
        href={GOOGLE_MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="map-navigation-button"
      >

        Google Maps 導航

        <span>
          →
        </span>

      </a>

    </div>
  );
}


// ======================================================
// Home
// ======================================================

export default function Home() {
  return (
    <main className="home-container">

      {/* Hero */}
      <section className="hero-section">

        {/* 桌機版輪播 */}
        <div className="hero-carousel-wrapper desktop-hero-carousel">
          <Carousel />
        </div>


        {/* 手機版主視覺：直接顯示主圖，避免輪播在手機被裁切 */}
        <Link
          to="/promotions"
          className="mobile-hero-banner"
          aria-label="查看最新促銷活動"
        >
          <img
            src={Sample1}
            alt="最新促銷活動"
          />
        </Link>


        <aside className="hero-side">

          <FacebookCard />

          <MemberActions />

        </aside>

      </section>


      {/* 快速服務 */}
      <section className="home-section quick-service-section">

        <div className="section-heading">

          <div>

            <span className="section-eyebrow">
              QUICK ACCESS
            </span>

            <h2>
              快速服務
            </h2>

          </div>

        </div>


        <QuickServices />

      </section>


      {/* 門市資訊 */}
      <section className="home-section location-section">

        <div className="location-layout">

          <StoreInfo />

          <GoogleMap />

        </div>

      </section>


      {/* 理性投注 */}
      <section className="home-section responsible-section">

        <div className="responsible-heading">

          <span className="section-eyebrow">
            RESPONSIBLE PLAY
          </span>

          <h2>
            理性投注，享受賽事
          </h2>

        </div>


        <motion.div
          className="warning-content"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <img
            src={Warning}
            alt="未成年人請勿下注與相關投注警語"
            className="warning-img"
          />

        </motion.div>

      </section>

    </main>
  );
}