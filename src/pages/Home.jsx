import React, { useEffect } from "react";
import "./Home.css";
import Sample1 from "../images/sample1.png";
import Sample2 from "../images/sample2.png";
import Sample3 from "../images/sample3.png";
import SmallSample1 from "../images/smallsample1.png";
import SmallSample2 from "../images/smallsample2.png";
import SmallSample3 from "../images/smallsample3.png";

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
        <blockquote cite="https://www.facebook.com/profile.php?id=100063820583160" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/profile.php?id=100063820583160">Facebook 粉絲專頁</a>
        </blockquote>
      </div>
    </div>
  );
}

function TwoColumnButtons() {
  return (
    <div className="two-column-buttons">
      <button className="column-button">申請成為會員</button>
      <button className="column-button">二轉三屆會員</button>
    </div>
  );
}


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

export default function Home() {
  return (
    <div className="home-container">
      {/* 第一個 Section */}
      <section className="top-section">
        <div className="carousel-section">
          <Carousel />
        </div>
        <div className="pink-section">
          <PinkBox />
          <TwoColumnButtons />
        </div>
      </section>

      {/* 第二個 Section */}
      <section className="bottom-section">
        <SmallImages />
      </section>

      {/* 新增第三個 Section */}
      <section className="extended-section">
        <h2>新增區域內容</h2>
        <p>在這裡添加更多內容，比如文字、圖片或按鈕等。</p>
      </section>
    </div>
  );
}