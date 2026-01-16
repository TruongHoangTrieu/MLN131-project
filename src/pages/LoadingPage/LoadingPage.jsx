import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./LoadingPage.css";

const LoadingPage = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const percent = Math.floor(
      (video.currentTime / video.duration) * 100
    );
    setProgress(percent);
  };

  const handleVideoEnd = () => {
    setProgress(100);
    onFinished();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      video.play();
      setIsSoundOn(true);
    } else {
      video.muted = true;
      setIsSoundOn(false);
    }
  };

  return (
    <div className="historical-loading">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="background-video"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      {/* 🔊 Nút bật / tắt âm thanh (LUÔN HIỆN) */}
      <button className="sound-toggle" onClick={toggleSound}>
        {isSoundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      <div className="footer-loading">
        <div className="loading-bar-container">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="loading-text">
          ĐANG TẢI DỮ LIỆU ... {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
