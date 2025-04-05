import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

import Sample1 from "../images/sample1.png";
import Sample2 from "../images/sample2.png";
import Sample3 from "../images/sample3.png";
import SmallSample1 from "../images/smallsample1.png";
import SmallSample2 from "../images/smallsample2.png";
import SmallSample3 from "../images/smallsample3.png"; 
import Warning from "../images/warning.jpg";

// Carousel Component
function Carousel() {
  return (
    <div className="carousel">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Sample1} className="d-block" alt="Slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img src={Sample2} className="d-block" alt="Slide 2" />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img src={Sample3} className="d-block" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// PinkBox Component (包含 Facebook 粉絲專頁)
function PinkBox() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="pink-box">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=100063820583160"
        data-tabs="timeline"
        data-width="500"
        data-height="400"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/profile.php?id=100063820583160"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/profile.php?id=100063820583160">Facebook 粉絲專頁</a>
        </blockquote>
      </div>
    </div>
  );
}

// TwoColumnButtons Component
function TwoColumnButtons() {
  return (
    <div className="two-column-buttons">
      <a href="https://channel.sportslottery.com.tw/zh-tw/register/step1?retailerid=93179171" className="column-button">
        申請成為會員
      </a>
      <a href="https://transfer.sportslottery.com.tw/zh-tw/transfer/step1?thirdrid=93179171" className="column-button">
        二轉三屆會員
      </a>
    </div>
  );
}

// SmallImages Component
function SmallImages() {
  return (
    <div className="small-images">
      <div className="small-image">
        <img src={SmallSample1} alt="Sample 1" />
      </div>
      <div className="small-image">
        <img src={SmallSample2} alt="Sample 2" />
      </div>
      <div className="small-image">
        <img src={SmallSample3} alt="Sample 3" />
      </div>
    </div>
  );
}

// GoogleMap Component
function GoogleMap() {
  return (
    <div className="google-map">
      <iframe
        title="樂穎彩券行位置"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.167955096296!2d120.7004771!3d24.1658418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917e4cb56b453%3A0x5e9d44239426e393!2z5a-M5q-U5aSa5p2x5YWJ5bqX!5e0!3m2!1szh-TW!2stw!4v1738571339417!5m2!1szh-TW!2stw"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

// Home Component
export default function Home() {
  return (
    <div className="home-container">
      {/* 第一個 Section：Carousel 與 PinkBox + Buttons */}
      <section className="top-section">
        <div className="carousel-section">
          <Carousel />
        </div>
        <div className="pink-section">
          <PinkBox />
          <TwoColumnButtons />
        </div>
      </section>

      {/* 第二個 Section：Small Images */}
      <section className="bottom-section">
        <SmallImages />
      </section>

      {/* 第三個 Section：Google Map */}
      <section className="extended-section">
        <h2>快來找我們試試手氣！</h2>
        <GoogleMap />
      </section>

      {/* 第四個 Section：警告區塊 */}
      <section className="extended-section warning-section">
        <motion.div
          className="warning-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={Warning} alt="警告圖示" className="warning-img" />
        </motion.div>
      </section>
    </div>
  );
}
