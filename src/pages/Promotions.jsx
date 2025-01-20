import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Promotions.css";
import promoImage1 from "../images/sample1.png";
import promoImage2 from "../images/sample2.png";
import promoImage3 from "../images/sample3.png";

const promotions = [
  {
    title: "善良公式",
    description: "公益彩券x您的愛心=無限的善良，每張公益彩券讓善良兌現！",
    image: promoImage1,
    link: "https://youtu.be/Lvurxb0iSZM",
  },
  {
    title: "行．而善",
    description: "台灣彩券全新品牌影片，看見臺灣獨有的「特別能力」。",
    image: promoImage2,
    link: "https://youtu.be/6F7jRD2rOLw",
  },
  {
    title: "台彩樂Now事",
    description: "你的正能量已送達，即刻按讚收藏！台彩粉絲團，歡樂持續放送！",
    image: promoImage3,
    link: "https://www.facebook.com/tlcformal",
  },
];

function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("down"); // 用於控制動畫方向

  const handlePrev = () => {
    setDirection("up");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("down");
    setCurrentIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { title, description, image, link } = promotions[currentIndex];

  return (
    <div className="promotions-container">
    {/* 添加额外的星星容器 */}
    <div className="additional-stars">
      <span className="star-1">★</span>
      <span className="star-2">★</span>
      <span className="star-3">★</span> {/* 新增的星星 */}
      <span className="star-4">★</span> {/* 新增的星星 */}
    </div>
    <div className="promotions-content">
      <TransitionGroup className="promo-wrapper">
        <CSSTransition
          key={currentIndex}
          timeout={500}
          classNames={`slide-${direction}`}
        >
          <div className="promo-card">
            <div className="promo-text">
              <h1 className="promo-title">{title}</h1>
              <p className="promo-description">{description}</p>
              <button className="promo-button">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  查看更多
                </a>
              </button>
            </div>
            <div className="promo-image-wrapper">
              <img src={image} alt={title} className="promo-image" />
            </div>            
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
    <div className="promotions-nav">
      <button className="nav-button" onClick={handlePrev}>▲</button>
      <p className="nav-indicator">{currentIndex + 1}/{promotions.length}</p>
      <button className="nav-button" onClick={handleNext}>▼</button>
    </div>
  </div>
  );
}

export default Promotions;
