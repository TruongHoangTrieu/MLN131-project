import React from "react";
import { Star, Copyright, Mail, Share2 } from "lucide-react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-texture-overlay"></div>
      
      <div className="footer-container">
        {/* Biểu tượng Ngôi sao vàng chính giữa */}
        <div className="footer-logo">
          <div className="star-wrapper">
            <Star fill="#ffd700" color="#ffd700" size={32} />
          </div>
        </div>

        {/* Tiêu đề chính */}
        <div className="footer-content">
          <h2 className="footer-main-title">
            LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM
          </h2>
          <p className="footer-meta">
            DỰ ÁN THUYẾT TRÌNH GIÁO DỤC • 2025
          </p>
        </div>

        {/* Thanh ngăn cách trang trí */}
        <div className="footer-divider"></div>

        {/* Các liên kết bổ sung (Tùy chọn để thêm tính tương tác) */}
        <div className="footer-links">
          <div className="link-item">
            <Mail size={16} /> <span>LIÊN HỆ TƯ LIỆU</span>
          </div>
          <div className="link-item">
            <Share2 size={16} /> <span>CHIA SẺ DỰ ÁN</span>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="footer-copyright">
          <Copyright size={12} /> 2025 Bản quyền thuộc về Nhóm thực hiện dự án
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;