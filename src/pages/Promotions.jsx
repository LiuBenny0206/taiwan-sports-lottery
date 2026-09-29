import React, { useEffect, useState } from "react";
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
        ✈️ 累積下注滿 40 萬起，日本單程機票免費送
        <br />
        沖繩｜大阪｜東京，達指定門檻自由選
      </>
    ),

    details: (
      <div className="japan-promo">

        {/* 簡潔標題 */}
        <div className="japan-header">
          <p>
            滿指定累積下注額，即可獲得
            <strong> 日本單程機票乙張</strong>
          </p>
        </div>

        {/* 三個門檻 */}
        <div className="flight-options">

          <div className="flight-option featured">
            <span className="option-badge">輕鬆達標</span>

            <div className="option-amount">
              <strong>40</strong>
              <span>萬</span>
            </div>

            <div className="option-label">
              累積下注
            </div>

            <div className="option-route">
              ✈ 沖繩
            </div>
          </div>

          <div className="flight-option">
            <span className="option-badge gray">
              兩地任選
            </span>

            <div className="option-amount">
              <strong>45</strong>
              <span>萬</span>
            </div>

            <div className="option-label">
              累積下注
            </div>

            <div className="option-route">
              ✈ 大阪
              <span>｜</span>
              沖繩
            </div>
          </div>

          <div className="flight-option premium">
            <span className="option-badge gold">
              三地任選
            </span>

            <div className="option-amount">
              <strong>55</strong>
              <span>萬</span>
            </div>

            <div className="option-label">
              累積下注
            </div>

            <div className="option-route">
              ✈ 東京
              <span>｜</span>
              大阪
              <span>｜</span>
              沖繩
            </div>
          </div>

        </div>

        {/* 一句話說明 */}
        <div className="choice-summary">
          <strong>達越高門檻，可選航點越多</strong>
          <span>
            達標後，可於該門檻符合資格的航點中任選一地。
          </span>
        </div>

        {/* 重要規則 */}
        <div className="quick-rules">
          <h4>活動說明</h4>

          <ul>
            <li>
              機票以
              <strong> 桃園國際機場出發 </strong>
              之日本單程機票為主。
            </li>

            <li>
              限
              <strong> 平日、指定航空、指定基本票種</strong>。
            </li>

            <li>
              指定其他日期、航班、托運行李或選位，
              超出活動補助額度之差額由會員自行負擔。
            </li>

            <li>
              機票不得折現、轉售、轉讓，
              不同航點票價差額不另行退還。
            </li>
          </ul>

          {/* 完整規則收合 */}
          <details className="full-rules">
            <summary>
              查看完整活動規則
            </summary>

            <div className="full-rules-content">
              <p>
                1. 本活動為日本單程機票贈送活動，
                限符合活動資格之會員參加。
              </p>

              <p>
                2. 達指定累積下注額後，
                可於符合資格之航點中任選其一。
              </p>

              <p>
                3. 機票以桃園國際機場出發之
                日本單程機票為主。
              </p>

              <p>
                4. 機票限平日、指定航空及指定基本票種，
                實際開票內容依活動辦法與店家安排為準。
              </p>

              <p>
                5. 若會員指定其他日期、熱門時段、
                不同航班，或加購托運行李、選位等服務，
                超出活動補助額度之差額由會員自行負擔。
              </p>

              <p>
                6. 機票不得折現、不得轉售、
                不得轉讓，且不同航點之票價差額
                不另行退還。
              </p>

              <p>
                7. 詳細活動規則與資格認定，
                依萬豪彩券行公告與說明為準。
              </p>
            </div>
          </details>
        </div>
      </div>
    ),

    image: promoImage1,
    isVisible: true,
  },

  {
    title: "豪氣加入，下注拿黃金紅包",

    description: (
      <>
        🧧 數量有限，立即加入領取專屬黃金好禮！
      </>
    ),

    details: (
      <div className="simple-promo-details">
        <p>
          即日起申請加入萬豪運彩會員，
          並首次成功下注不限金額，
          即刻獲得純金黃金紅包，
          <strong>限量 30 名！</strong>
        </p>

        <div className="simple-highlight">
          🧨 新會員專屬福利，數量有限，送完為止
        </div>
      </div>
    ),

    image: promoImage2,
    isVisible: true,
  },

  {
    title: "輕鬆下注，送600元全聯禮券",

    description: (
      <>
        🎁 完成指定步驟，即可免費獲得全聯禮券！
      </>
    ),

    details: (
      <div className="simple-promo-details">
        <p>
          加入台灣運彩會員，
          並成功下注滿 3 次，
          即可免費獲得
          <strong>價值 600 元全聯禮券</strong>。
        </p>

        <div className="simple-highlight">
          💎 日常購物更划算，好禮輕鬆帶回家
        </div>
      </div>
    ),

    image: promoImage3,
    isVisible: true,
  },
];

function Modal({
  isOpen,
  onClose,
  title,
  details,
  image,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(event) =>
          event.stopPropagation()
        }
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="關閉活動視窗"
        >
          ×
        </button>



        <h2 className="modal-title">
          {title}
        </h2>

        <div className="modal-details">
          {details}
        </div>
      </div>
    </div>
  );
}

function Promotions() {
  const visiblePromotions =
    promotions.filter(
      (promotion) =>
        promotion.isVisible
    );

  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const [
    direction,
    setDirection,
  ] = useState("down");

  const [
    modalOpen,
    setModalOpen,
  ] = useState(false);

  useEffect(() => {
    if (
      currentIndex >=
      visiblePromotions.length
    ) {
      setCurrentIndex(0);
    }
  }, [
    visiblePromotions.length,
    currentIndex,
  ]);

  if (
    visiblePromotions.length === 0
  ) {
    return null;
  }

  const handlePrev = () => {
    setDirection("up");

    setCurrentIndex((previous) =>
      previous === 0
        ? visiblePromotions.length - 1
        : previous - 1
    );

    setModalOpen(false);
  };

  const handleNext = () => {
    setDirection("down");

    setCurrentIndex((previous) =>
      previous ===
      visiblePromotions.length - 1
        ? 0
        : previous + 1
    );

    setModalOpen(false);
  };

  const {
    title,
    description,
    details,
    image,
  } = visiblePromotions[currentIndex];

  return (
    <section className="promotions-container">

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
                <span className="promo-eyebrow">
                  萬豪會員限定活動
                </span>

                <h1 className="promo-title">
                  {title}
                </h1>

                <div className="promo-description">
                  {description}
                </div>

                <button
                  className="promo-button"
                  onClick={() =>
                    setModalOpen(true)
                  }
                >
                  查看活動詳情
                  <span>→</span>
                </button>
              </div>

              <div className="promo-image-wrapper">
                <img
                  src={image}
                  alt={title}
                  className="promo-image"
                />
              </div>

            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      {visiblePromotions.length > 1 && (
        <div className="promotions-nav">

          <button
            className="nav-button"
            onClick={handlePrev}
          >
            ▲
          </button>

          <p className="nav-indicator">
            <strong>
              {currentIndex + 1}
            </strong>
            <span>
              /{visiblePromotions.length}
            </span>
          </p>

          <button
            className="nav-button"
            onClick={handleNext}
          >
            ▼
          </button>

        </div>
      )}

      <Modal
        isOpen={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        title={title}
        details={details}
        image={image}
      />
    </section>
  );
}

export default Promotions;