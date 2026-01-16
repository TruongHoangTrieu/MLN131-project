import React from "react";
import { X, Sparkles } from "lucide-react";
import "./HistoryModal.css";

const HistoryModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="hist-modal-overlay" onClick={onClose}>
      <div className="hist-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Banner và Header giữ nguyên */}
        <div className="hist-modal-banner">
          <img src={data.image} alt={data.title} />
          <div className="hist-year-tag">
            <span className="calendar-icon">📅</span> {data.year}
          </div>
          <button className="hist-close-top" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="hist-modal-content">
          <h2 className="hist-main-title">{data.title}</h2>

          <div className="hist-intro-text">
            {/* Duyệt qua từng dòng trong mảng fullDesc */}
            {data.fullDesc && Array.isArray(data.fullDesc) ? (
              data.fullDesc.map((line, index) => (
                <p key={index} className="desc-line">
                  {line}
                </p>
              ))
            ) : (
              <p>{data.fullDesc}</p> // Trường hợp data cũ vẫn là chuỗi đơn
            )}
          </div>

          {/* Khối Điểm nổi bật - CHUYỂN SANG DỮ LIỆU ĐỘNG */}
          <div className="hist-highlights-box">
            <div className="highlights-header">
              <Sparkles size={16} className="gold-text" />
              <span>ĐIỂM NỔI BẬT</span>
            </div>
            <ul className="highlights-list">
              {/* Kiểm tra nếu có mảng highlights thì mới render */}
              {data.highlights &&
                data.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>

          <div className="hist-modal-footer">
            <button className="btn-close-footer" onClick={onClose}>
              ĐÓNG LẠI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
