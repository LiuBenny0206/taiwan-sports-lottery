import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer fixed bottom-0 left-0 w-full bg-yellow-300 text-black">
      <div className="flex justify-around items-center h-16">
        <a href="/" className="text-center">
          <div>🏠</div>
          <span className="text-xs">首頁</span>
        </a>
        <a href="/promotions" className="text-center">
          <div>🎁</div>
          <span className="text-xs">優惠</span>
        </a>
        <a href="/register" className="text-center">
          <div>🔒</div>
          <span className="text-xs">登入/註冊</span>
        </a>
        <a href="/store" className="text-center">
          <div>🏪</div>
          <span className="text-xs">店面</span>
        </a>
        <a href="/support" className="text-center">
          <div>📞</div>
          <span className="text-xs">客服</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
