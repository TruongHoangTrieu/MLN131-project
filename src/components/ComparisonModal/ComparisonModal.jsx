import React from "react";
import { 
  X, Target, Briefcase, Users, Scale, 
  Info, ShieldCheck, Globe, Star 
} from "lucide-react";
import "./ComparisonModal.css";

const ComparisonDetailModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  // Hàm hỗ trợ gán Icon dựa trên tên nhãn
  const renderIcon = (label) => {
    const lb = label.toLowerCase();
    if (lb.includes("mục tiêu")) return <Target size={18} className="gold-text" />;
    if (lb.includes("sở hữu") || lb.includes("bản chất")) return <ShieldCheck size={18} className="gold-text" />;
    if (lb.includes("phân phối")) return <Scale size={18} className="gold-text" />;
    if (lb.includes("quản lý") || lb.includes("điều tiết")) return <Briefcase size={18} className="gold-text" />;
    if (lb.includes("xã hội") || lb.includes("con người")) return <Users size={18} className="gold-text" />;
    return <Info size={18} className="gold-text" />;
  };

  return (
    <div className="cmp-modal-overlay" onClick={onClose}>
      <div className="cmp-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Header với vệt sáng gold */}
        <div className="cmp-modal-header">
          <div className="cmp-title-group">
            <h2 className="cmp-title">{data.title}</h2>
            <div className="cmp-badge">
               <Star size={12} fill="#d4af37" stroke="none" />
               <span>{data.year}</span>
            </div>
          </div>
          <button className="cmp-close" onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>
        </div>

        <div className="cmp-modal-body">
          {/* Mô tả chính */}
          <div className="cmp-desc-box">
            <p className="cmp-desc">{data.desc}</p>
          </div>

          {/* Nội dung các Section với Icon */}
          <div className="cmp-sections">
            {data.sections.map((item, index) => (
              <div key={index} className="cmp-section-item">
                <div className="cmp-section-left">
                  <div className="cmp-icon-wrapper">
                    {renderIcon(item.label)}
                  </div>
                  <div className="cmp-vertical-line"></div>
                </div>
                <div className="cmp-section-right">
                  <span className="cmp-label">{item.label}</span>
                  <p className="cmp-content">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer đơn giản */}
        <div className="cmp-footer">
          <button className="cmp-footer-btn" onClick={onClose}>HOÀN TẤT</button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDetailModal;