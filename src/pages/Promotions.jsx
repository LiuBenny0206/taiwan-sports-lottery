import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Promotions.css";

// 引入促銷活動所需圖片
import promoImage1 from "../images/sample1.png";
import promoImage2 from "../images/sample2.png";
import promoImage3 from "../images/sample3.png";

/**
 * 促銷活動數據
 * 每個活動包含標題、描述、詳細資訊、圖片與連結
 */
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
        即日起申請加入萬豪運彩會員，並首次成功下注不限金額，即刻獲得純金黃金紅包，限量30名！<br/>
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
        只要完成簡單四步驟，立即加入台灣運彩會員，並成功下注滿3次，即可免費獲得價值600元的全聯禮券卡！<br/>
        💎日常購物更划算，輕鬆享受好禮不間斷。
      </>
    ),
    image: promoImage3,
    link: "https://youtu.be/6F7jRD2rOLw",
  },
];

/**
 * Modal Component
 * 顯示促銷活動詳細資訊的模態視窗
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - 是否顯示模態視窗
 * @param {function} props.onClose - 關閉模態視窗的回調函數
 * @param {string} props.title - 促銷活動標題
 * @param {JSX.Element} props.details - 促銷活動詳細資訊
 * @param {string} props.image - 活動圖片路徑
 */
function Modal({ isOpen, onClose, title, details, image }) {
  // 若模態視窗未開啟則不渲染任何內容
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* 阻止點擊內容區域時冒泡觸發 overlay 點擊事件 */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* 關閉按鈕 */}
        <button className="modal-close" onClick={onClose}>×</button>
        {/* 活動圖片 */}
        <img src={image} alt={title} className="modal-image" />
        {/* 活動標題 */}
        <h2 className="modal-title">{title}</h2>
        {/* 活動詳細資訊 */}
        <p className="modal-details">{details}</p>
      </div>
    </div>
  );
}

/**
 * Promotions Component
 * 顯示促銷活動卡片並提供動畫過渡、左右切換與模態視窗展示
 */
function Promotions() {
  // 當前促銷活動索引
  const [currentIndex, setCurrentIndex] = useState(0);
  // 控制動畫方向（"up" 或 "down"）
  const [direction, setDirection] = useState("down");
  // 控制模態視窗是否顯示
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * 切換到上一個促銷活動
   */
  const handlePrev = () => {
    setDirection("up");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  /**
   * 切換到下一個促銷活動
   */
  const handleNext = () => {
    setDirection("down");
    setCurrentIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 開啟模態視窗
  const handleOpenModal = () => setModalOpen(true);
  // 關閉模態視窗
  const handleCloseModal = () => setModalOpen(false);

  // 從促銷活動資料中取得當前活動的資訊
  const { title, description, details, image, link } = promotions[currentIndex];

  return (
    <div className="promotions-container">
      {/* 背景星星裝飾 */}
      <div className="additional-stars">
        <span className="star-1">★</span>
        <span className="star-2">★</span>
        <span className="star-3">★</span>
        <span className="star-4">★</span>
      </div>
      
      <div className="promotions-content">
        {/* 使用 TransitionGroup 與 CSSTransition 提供滑動動畫效果 */}
        <TransitionGroup className="promo-wrapper">
          <CSSTransition
            key={currentIndex}
            timeout={500}
            classNames={`slide-${direction}`}
          >
            <div className="promo-card">
              <div className="promo-text">
                {/* 促銷活動標題 */}
                <h1 className="promo-title">{title}</h1>
                {/* 促銷活動描述 */}
                <p className="promo-description">{description}</p>
                {/* 點擊按鈕以查看詳細資訊，打開模態視窗 */}
                <button className="promo-button" onClick={handleOpenModal}>
                  查看更多
                </button>
              </div>
              <div className="promo-image-wrapper">
                {/* 促銷活動圖片 */}
                <img src={image} alt={title} className="promo-image" />
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      {/* 促銷活動導航按鈕 */}
      <div className="promotions-nav">
        <button className="nav-button" onClick={handlePrev}>▲</button>
        <p className="nav-indicator">{currentIndex + 1}/{promotions.length}</p>
        <button className="nav-button" onClick={handleNext}>▼</button>
      </div>

      {/* 模態視窗：顯示當前促銷活動的詳細資訊 */}
      <Modal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        title={title} 
        details={details} 
        image={image} 
      />
    </div>
  );
}

export default Promotions;
