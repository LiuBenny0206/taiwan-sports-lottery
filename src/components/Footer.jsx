import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer class="footer-container">
    <div class="footer-section">
      <h3>客服專線</h3>
      <hr />
      <p>市話 04 2231 3003</p>
      <a 
        class="line-button" 
        href="https://lin.ee/gBlnW6RB"
        onclick="window.location.href='https://line.me/ti/p/@your-line-id'">
        LINE
      </a>
       <a
        class="footer-google-map-button"
        href="https://www.google.com/maps?sca_esv=a9faa05f167cab1b&sxsrf=ADLYWILRYg-zFTkWVVM9k-IkNG_QkSmH3Q:1735783465944&q=%E6%A8%82%E7%A9%8E%E5%BD%A9%E5%88%B8%E8%A1%8C&fbs=AEQNm0AaBOazvTRM_Uafu9eNJJzCbF5Xkn0WmZWrNBlhQ5AQFOZM5xYdfIIIZQZe9lZbbb814y74W82dGKlPf4J7C80d7tNPBXR2tiXHl1fD9J3XwxHwJoPhjgFNyZEMpu9ssuwKSXXXfSsKyJWLtyUhiYtkCHLyph0K0nrFSM8vJSA5sLAfKkqqcYDQaviF0Kp0cXu_KLhZ&biw=1745&bih=901&dpr=1.1&um=1&ie=UTF-8&ved=1t:200715&ictx=111"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Map
      </a>

    </div>
    <div class="footer-section">
      <h3>服務專區</h3>
      <hr />
      <a href="/promotions">好禮活動</a>
      <a href="/registration">註冊教學</a>
      <a href="/change-retailer">變更經銷商</a>
      <a href="/about">關於我們</a>
    </div>
    <div class="footer-section">
      <h3>投注教學</h3>
      <hr />
      <a href="https://article.sportslottery.com.tw/zh-tw/innovation/1">運彩規則</a>
    </div>
    <div class="footer-section">
      <h3>運動數據</h3>
      <hr />
      <a href="https://s5.sir.sportradar.com/taiwansportslottery/zht/3">棒球數據</a>
      <a href="https://s5.sir.sportradar.com/taiwansportslottery/zht/2">籃球數據</a>
      <a href="https://s5.sir.sportradar.com/taiwansportslottery/zht/5">網球數據</a>
      <a href="https://s5.sir.sportradar.com/taiwansportslottery/zht/1">足球數據</a>
    </div>
    <div class="footer-section">
      <h3>開賣賽事</h3>
      <hr />
      <a href="https://www.sportslottery.com.tw/sportsbook/daily-coupons">賽事表</a>
      <a href="https://www.sportslottery.com.tw/sportsbook/livescore">賽果查詢</a>
    </div>
  </footer>
  
  );
}

export default Footer;
