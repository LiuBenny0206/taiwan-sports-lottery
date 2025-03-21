import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Promotions.css";
import promoImage1 from "../images/sample1.png";
import promoImage2 from "../images/sample2.png";
import promoImage3 from "../images/sample3.png";

const promotions = [
  {
    title: "下注滿額，免費飛日本",
    description: (
      <>
        ✨活動期間限定，立即點擊瞭解詳細規則！<br />
        ✨別錯過機會，讓運氣帶你飛向日本！
      </>
    ),
    details: (
      <>
        現在只要在台灣運彩下注滿指定金額，即可免費獲得日本機票！<br />
        暢遊東京、大阪、京都，體驗櫻花美景、美食佳餚及熱情文化。<br />
        ❗機票價格以平日計算
      </>
    ),
    image: promoImage1,
    link: "https://youtu.be/6F7jRD2rOLw",
  },
  {
    title: "豪氣加入，下注拿黃金紅包",
    description: (
      <>
      🧧數量有限，立即加入領取專屬黃金好禮！
      </>
    ),
    details: (
      <>
        即日起申請加入萬豪運彩會員，並首次成功下注不限金額，即刻獲得純金黃金紅包，限量30名！
        <br/>
        🧨好運財神到，黃金福氣送給你，新會員專屬福利，錯過再等一年！
      </>
    ),
    image: promoImage2,
    link: "https://youtu.be/6F7jRD2rOLw",
  },
  {
    title: "輕鬆下注，送600$全聯禮券",
    description: (
      <>
      🔷立即完成步驟領取屬於你的全聯禮券！
      </>
    ),
    details: (
      <>
        只要完成簡單四步驟，立即加入台灣運彩會員，並成功下注滿3次，即可免費獲得價值600元的全聯禮券卡！
        <br/>
        💎日常購物更划算，輕鬆享受好禮不間斷。
      </>
    ),
    image: promoImage3,
    link: "https://youtu.be/6F7jRD2rOLw",
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
