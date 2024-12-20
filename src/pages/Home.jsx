import React from "react";
import "./Home.css";
import Sample1 from "../images/sample1.png";
import Sample2 from "../images/sample2.png";
import Sample3 from "../images/sample3.png";
import SmallSample1 from "../images/smallsample1.png";
import SmallSample2 from "../images/smallsample2.png";
import SmallSample3 from "../images/smallsample3.png";

function Carousel() {
  return (
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
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function PinkBox() {
  return (
    <div className="pink-box">
      <h2>粉紅色內容區</h2>
      {/* 在這裡填充具體內容 */}
    </div>
  );
}

function SmallImages() {
  return (
    <div className="bottom-section">
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
      <div className="top-section">
        <div className="carousel-section">
          <Carousel />
        </div>
        <div className="pink-section">
          <PinkBox />
        </div>
      </div>
      <div className="bottom-section">
        <SmallImages />
      </div>
    </div>
  );
}
