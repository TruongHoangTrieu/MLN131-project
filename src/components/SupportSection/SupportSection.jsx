import React, { useState, useEffect, useRef } from "react";
import { 
  Wheat, Bomb, Package, Heart, 
  Truck, UsersRound, Shield, Flag, 
  Star, Swords, Map, Milestone, Clock 
} from "lucide-react";
import "./SupportSection.css";

const SupportSection = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  // Xử lý logic tính % thanh progress khi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Tính toán: Khi section bắt đầu vào màn hình đến khi biến mất
      // progress sẽ chạy từ 0% đến 100%
      const start = rect.top - windowHeight;
      const totalHeight = rect.height + windowHeight;
      const currentProgress = Math.abs(start) / totalHeight;
      
      const clampedProgress = Math.min(Math.max(currentProgress * 100, 0), 100);
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const supportCards = [
    { no: "NO.01", icon: <Wheat size={22} />, title: "Lương thực", desc: "Gạo, lương khô nuôi quân", qty: "500,000 tấn/năm", color: "#b37d12" },
    { no: "NO.02", icon: <Bomb size={22} />, title: "Vũ khí", desc: "Súng, đạn dược, thuốc nổ", qty: "200,000+ khẩu súng", color: "#a11d1d" },
    { no: "NO.03", icon: <Package size={22} />, title: "Quân nhu", desc: "Quần áo, ba lô, dụng cụ", qty: "10 triệu bộ", color: "#0d6e4a" },
    { no: "NO.04", icon: <Heart size={22} />, title: "Quân y", desc: "Thuốc men, cứu thương", qty: "50,000 y bác sĩ", color: "#9c1440" },
    { no: "NO.05", icon: <Truck size={22} />, title: "Vận tải", desc: "Xe tải, xe đạp thồ", qty: "10,000+ xe", color: "#1d3a6e" },
    { no: "NO.06", icon: <UsersRound size={22} />, title: "Thanh niên xung phong", desc: "Mở đường, phục vụ chiến trường", qty: "100,000+ người", color: "#a14d1d" },
    { no: "NO.07", icon: <Shield size={22} />, title: "Bộ đội", desc: "Chiến sĩ chi viện miền Nam", qty: "300,000+ quân", color: "#146e45" },
    { no: "NO.08", icon: <Flag size={22} />, title: "Đoàn quân ra trận", desc: "Hành quân vào Nam thống nhất", qty: "10+ năm", color: "#a11d1d" },
  ];

  return (
    <section className="support-section" ref={sectionRef}>
      <div className="section-texture-overlay"></div>
      
      <div className="support-container">
        {/* Header */}
        <header className="support-header">
          <div className="support-badge">
             <Swords size={14} /> TUYẾN CHI VIỆN CHIẾN LƯỢC
          </div>
          <h2 className="support-main-title">
            Chi viện từ <span className="text-red">Bắc</span> vào <span className="text-gold">Nam</span>
          </h2>
          <p className="support-subtitle">
            "Hàng triệu tấn lương thực, vũ khí và hàng vạn chiến sĩ hành quân vượt Trường Sơn chi viện miền Nam."
          </p>
        </header>

        {/* North-South Flow với Progress động */}
        <div className="support-flow">
          <div className="flow-point">
            <div className="point-icon star">
              <Star fill="#ffd700" color="#ffd700" size={28} />
            </div>
            <span className="point-name">MIỀN BẮC</span>
            <span className="point-sub">HẬU PHƯƠNG LỚN</span>
          </div>
          
          <div className="flow-line-container">
            <div className="flow-line-bg"></div>
            {/* Thanh này sẽ dài ra khi scroll */}
            <div 
              className="flow-line-active" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flow-point">
            <div className="point-icon flag">
              <Flag fill="#ff4d4d" color="#ff4d4d" size={28} />
            </div>
            <span className="point-name">MIỀN NAM</span>
            <span className="point-sub">TIỀN TUYẾN LỚN</span>
          </div>
        </div>

        {/* Grid Cards 8 ô y hệt mẫu */}
        <div className="support-grid">
          {supportCards.map((card, index) => (
            <div key={index} className="support-card">
              <span className="card-no">{card.no}</span>
              <div className="card-icon-box" style={{ backgroundColor: card.color }}>
                {card.icon}
              </div>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-desc">{card.desc}</p>
              <div className="card-bottom">
                <span className="qty-label">SỐ LƯỢNG</span>
                <span className="qty-value">{card.qty}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Summary */}
        <div className="summary-stats">
          <div className="stat-item">
             <div className="stat-icon"><Package size={20} /></div>
             <div className="stat-info">
                <span className="stat-number">1.5 Triệu</span>
                <span className="stat-text">TẤN VẬT TƯ</span>
             </div>
          </div>
          <div className="stat-item">
             <div className="stat-icon"><Shield size={20} /></div>
             <div className="stat-info">
                <span className="stat-number">300,000+</span>
                <span className="stat-text">CHIẾN SĨ</span>
             </div>
          </div>
          <div className="stat-item">
             <div className="stat-icon"><Map size={20} /></div>
             <div className="stat-info">
                <span className="stat-number">20,000 km</span>
                <span className="stat-text">ĐƯỜNG TRƯỜNG SƠN</span>
             </div>
          </div>
          <div className="stat-item">
             <div className="stat-icon"><Clock size={20} /></div>
             <div className="stat-info">
                <span className="stat-number">10+ Năm</span>
                <span className="stat-text">KIÊN TRÌ CHIẾN ĐẤU</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;