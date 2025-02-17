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
    details: "善良的力量無遠弗屆，讓我們一起點燃希望，支持公益彩券！",
    image: promoImage1,
    link: "https://youtu.be/Lvurxb0iSZM",
  },
  {
    title: "行．而善",
    description: "台灣彩券全新品牌影片，看見臺灣獨有的「特別能力」。",
    details: "這支影片講述了台灣人獨特的善行文化，以及公益彩券如何改變世界。",
    image: promoImage2,
    link: "https://youtu.be/6F7jRD2rOLw",
  },
  {
    title: "台彩樂Now事",
    description: "你的正能量已送達，即刻按讚收藏！台彩粉絲團，歡樂持續放送！",
    details: "加入我們的粉絲團，掌握最新優惠與活動資訊！",
    image: promoImage3,
    link: "https://www.facebook.com/tlcformal",
  },
];

function Modal({ isOpen, onClose, title, details, image }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={image} alt={title} className="modal-image" />
        <h2 className="modal-title">{title}</h2>
        <p className="modal-details">{details}</p>
      </div>
    </div>
  );
}

function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("down"); // 控制動畫方向
  const [modalOpen, setModalOpen] = useState(false); // 控制模態視窗

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

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { title, description, details, image, link } = promotions[currentIndex];

  return (
    <div className="promotions-container">
      {/* 星星背景裝飾 */}
      <div className="additional-stars">
        <span className="star-1">★</span>
        <span className="star-2">★</span>
        <span className="star-3">★</span>
        <span className="star-4">★</span>
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
                <button className="promo-button" onClick={handleOpenModal}>
                  查看更多
                </button>
              </div>
              <div className="promo-image-wrapper">
                <img src={image} alt={title} className="promo-image" />
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      {/* 下方導航按鈕 */}
      <div className="promotions-nav">
        <button className="nav-button" onClick={handlePrev}>▲</button>
        <p className="nav-indicator">{currentIndex + 1}/{promotions.length}</p>
        <button className="nav-button" onClick={handleNext}>▼</button>
      </div>

      {/* 模態視窗 */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal} title={title} details={details} image={image} />
    </div>
  );
}

export default Promotions;
