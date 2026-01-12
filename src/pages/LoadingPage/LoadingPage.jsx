import React, { useState, useEffect } from "react";
import "./LoadingPage.css";

const LoadingPage = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinished(), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 50); 
    return () => clearInterval(timer);
  }, [onFinished]);

  const renderContent = () => {
    if (progress < 40) {
      return (
        <div className="fade-out-in" key="msg1">
          <h2 className="main-quote big-text">
            <span className="quote-mark">"</span>Lịch sử không chỉ để nhớ<span className="quote-mark">"</span>
          </h2>
        </div>
      );
    } else if (progress < 80) {
      return (
        <div className="fade-out-in" key="msg2">
          <h2 className="sub-quote medium-text">
            mà để <span className="highlight-red">TỰ HÀO</span> — để <span className="highlight-gold">TIẾP BƯỚC...</span>
          </h2>
        </div>
      );
    } else {
      return (
        <div className="fade-out-in" key="msg3">
          <h1 className="topic-title big-text highlight-gold">Tư tưởng Hồ Chí Minh</h1>
          <p className="topic-sub">Về Độc lập dân tộc & Chủ nghĩa xã hội</p>
        </div>
      );
    }
  };

  return (
    <div className="historical-loading">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        {/* Bạn thay đường dẫn video của bạn vào src ở trên */}
      </video>

      {/* Lớp phủ tối để làm nổi bật chữ trên nền video */}
      <div className="video-overlay"></div>
      {/* 4 Góc viền */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>

      <div className="dust-overlay"></div>

      {/* Vùng nội dung chính giữa */}
      <div className="center-stage">
        {renderContent()}
      </div>

      <div className="footer-loading">
        <div className="loading-bar-container">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">ĐANG TẢI DỮ LIỆU LỊCH SỬ... {progress}%</p>
      </div>
    </div>
  );
};

export default LoadingPage;