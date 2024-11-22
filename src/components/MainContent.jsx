import React from "react";
import "./MainContent.css";

function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block"
            alt="Slide 3"
          />
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
    <div className="content flex flex-col md:flex-row justify-between mt-4 w-full ">
      {/* Left Section */}
      <div className="left-content bg-gray-100 p-4 w-1/2">
        左側內容
      </div>

      {/* Right Section */}
      <div className="right-content bg-gray-100 p-4 w-1/2">
        右側內容
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="carousel-container flex flex-col items-center justify-center mx-auto mt-4">
      {/* Carousel Component */}
      <Carousel />

      {/* Content Area Component */}
      <ContentArea />
    </div>
  );
}
