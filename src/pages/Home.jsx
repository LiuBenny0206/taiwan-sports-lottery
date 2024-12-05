import React from "react";
import "./Home.css";
import Sample1 from "../images/sample1.png"
import Sample2 from "../images/sample2.png"
import Sample3 from "../images/sample3.png"
import SmallSample1 from "../images/smallsample1.png"
import SmallSample2 from "../images/smallsample2.png"
import SmallSample3 from "../images/smallsample3.png"

function Carousel() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Inner */}
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

      {/* Carousel Controls */}
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

function ContentArea() {
  return (
    <div className="content flex flex-col md:flex-row justify-center mt-4 w-full">
      {/* Left Section */}
      <div className="left-content bg-gray-100 p-4">
        左側內容
      </div>

      {/* Right Section */}
      <div className="right-content p-4 ">
        <img src={SmallSample1} alt="Sample 1" />
        <img src={SmallSample2} alt="Sample 2" />
        <img src={SmallSample3} alt="Sample 3" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="carousel-container flex flex-col items-center justify-center mx-auto">
      {/* Carousel Component */}
      <Carousel />

      {/* Content Area Component */}
      <ContentArea />
    </div>
  );
}
