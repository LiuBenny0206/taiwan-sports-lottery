import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import storepic1 from "../images/storepic1.jpg";
import storepic2 from "../images/storepic2.png";
import storepic3 from "../images/storepic3.jpg";
import storepic4 from "../images/storepic4.jpg";
import storepic5 from "../images/storepic5.jpg";
import storepic7 from "../images/storepic7.jpg";


// ======================================================
// About
// ======================================================

function About() {

  const galleryImages = [
    {
      src: storepic1,
      alt: "富鑫彩券行店內擺設",
      label: "店內特色",
    },
    {
      src: storepic2,
      alt: "富鑫彩券行櫃台",
      label: "服務櫃台",
    },
    {
      src: storepic3,
      alt: "富鑫彩券行店面",
      label: "門市外觀",
    },
    {
      src: storepic4,
      alt: "富鑫彩券行店內環境",
      label: "舒適空間",
    },
    {
      src: storepic5,
      alt: "富鑫彩券行投注區",
      label: "投注服務",
    },
  ];


  // 固定角度，不使用 Math.random()
  const tilts = [
    "-1deg",
    "0.8deg",
    "-0.5deg",
    "0.7deg",
    "-0.8deg",
  ];


  return (
    <main className="about-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="about-hero">

        <div className="about-hero-decoration about-hero-circle-1" />
        <div className="about-hero-decoration about-hero-circle-2" />


        <motion.div
          className="about-hero-content"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span className="about-eyebrow">
            ABOUT LEYING
          </span>

          <h1>
            關於我們
          </h1>

          <p>
            一間從在地出發，
            陪伴街坊走過每一次期待的彩券行。
          </p>

        </motion.div>

      </section>


      {/* ==================================================
          GALLERY
      ================================================== */}

      <section className="gallery-section">

        <div className="about-triangle triangle-one" />
        <div className="about-triangle triangle-two" />


        <div className="about-section-heading">

          <span className="about-eyebrow">
            OUR STORE
          </span>

          <h2>
            店面風采
          </h2>

          <p>
            從店外招牌到店內空間，
            每一個角落都是樂穎彩券行日常服務的一部分。
          </p>

        </div>


        <div className="scroll-gallery">

          {galleryImages.map((image, index) => (

            <motion.div
              key={index}
              className="gallery-card"
              style={{
                "--tilt": tilts[index],
              }}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="gallery-image-wrapper">

                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-photo"
                />

              </div>


              <div className="gallery-card-label">

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {image.label}
                </strong>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ==================================================
          STORY
      ================================================== */}

      <section className="story-section">

        <div className="story-container">


          {/* 左邊圖片 */}

          <motion.div
            className="story-image-wrapper"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <img
              src={storepic7}
              alt="樂穎彩券行門市"
              className="story-image"
            />


            <div className="story-image-badge">

              <span>
                LOCAL STORE
              </span>

              <strong>
                在地經營
              </strong>

            </div>

          </motion.div>


          {/* 右邊品牌故事 */}

          <motion.div
            className="story-content"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <span className="about-eyebrow">
              OUR STORY
            </span>

            <h2>
              從一間彩券行，
              <br />
              成為熟悉的街坊鄰居
            </h2>


            <div className="story-divider" />


            <p>
              樂穎彩券行從台灣彩券發展早期便投入彩券服務，
              一路陪伴許多熟悉的顧客走過不同階段。
              對我們而言，彩券不只是一張投注單，
              更是一種期待、一段交流，也是生活中的小小樂趣。
            </p>


            <p>
              隨著彩券與運動彩券服務日益成熟，
              我們持續調整店內環境與服務方式，
              希望讓每一位走進門市的顧客，
              都能更容易了解投注方式、活動資訊與相關服務。
            </p>


            <p>
              我們希望樂穎不只是一個購買彩券的地方，
              而是一間讓附近居民感到熟悉、自在，
              有需要時願意再次走進來的在地門市。
            </p>


            {/* 品牌特色 */}

            <div className="story-values">

              <div className="story-value">

                <span>
                  01
                </span>

                <div>
                  <strong>
                    在地經營
                  </strong>

                  <small>
                    長期服務社區與熟客
                  </small>
                </div>

              </div>


              <div className="story-value">

                <span>
                  02
                </span>

                <div>
                  <strong>
                    專業服務
                  </strong>

                  <small>
                    提供清楚的彩券與運彩資訊
                  </small>
                </div>

              </div>


              <div className="story-value">

                <span>
                  03
                </span>

                <div>
                  <strong>
                    用心陪伴
                  </strong>

                  <small>
                    讓每一次來店都更自在
                  </small>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          BRAND MESSAGE
      ================================================== */}

      <section className="brand-message-section">

        <motion.div
          className="brand-message"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <span>
            LEYING LOTTERY
          </span>

          <h2>
            每一張彩券都有一份期待，
            <br />
            每一次來店都值得被好好服務。
          </h2>

          <p>
            富鑫彩券行，陪你一起享受賽事與生活中的每一份期待。
          </p>

        </motion.div>

      </section>


      {/* ==================================================
          WAVE
      ================================================== */}

      <div className="footer-wave-container">

        <svg
          className="wave wave-back"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >

          <path
            d="M0,55 C260,120 520,15 780,65 C980,100 1080,95 1200,70 L1200,160 L0,160 Z"
            fill="#ffe77a"
          />

        </svg>


        <svg
          className="wave wave-front"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >

          <path
            d="M0,80 C260,25 500,115 760,78 C970,48 1100,95 1200,85 L1200,160 L0,160 Z"
            fill="#fff1ac"
          />

        </svg>

      </div>

    </main>
  );
}


export default About;