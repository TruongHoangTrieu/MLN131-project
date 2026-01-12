import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm tính toán opacity: Càng cuộn xuống opacity càng tiến về 0
  // start: điểm bắt đầu biến mất, end: điểm biến mất hoàn toàn
  const calculateOpacity = (start, end) => {
    const opacity = 1 - (scrollY - start) / (end - start);
    return Math.min(Math.max(opacity, 0), 1);
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Các phần tử sẽ có opacity giảm dần theo thứ tự cuộn */}
        <div 
          className="hero-star" 
          style={{ opacity: calculateOpacity(0, 150) }}
        >★</div>

        <p 
          className="hero-sub-top"
          style={{ opacity: calculateOpacity(50, 200) }}
        >
          LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM (1945-1975)
        </p>

        <h1 
          className="hero-years"
          style={{ opacity: calculateOpacity(100, 300) }}
        >
          1954 <span className="dash">—</span> 1965
        </h1>

        <h2 
          className="hero-main-title"
          style={{ opacity: calculateOpacity(150, 400) }}
        >
          HAI MIỀN – MỘT Ý CHÍ
        </h2>

        <div 
          className="hero-quote-box"
          style={{ opacity: calculateOpacity(200, 500) }}
        >
          <span className="quote-line"></span>
          <p className="hero-quote">
            "Đảng lãnh đạo – Bắc Nam chung sức – Dân tộc trường tồn"
          </p>
        </div>
      </div>

      <div 
        className="scroll-indicator"
        style={{ opacity: calculateOpacity(0, 100) }}
      >
        <span className="scroll-text">BẮT ĐẦU HÀNH TRÌNH</span>
        <div className="scroll-arrow">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;