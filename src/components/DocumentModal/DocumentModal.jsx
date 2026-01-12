import React from "react";
import { X, Calendar, FileText, Download, Share2, Award, Bookmark } from "lucide-react";
import "./DocumentModal.css";

const DocumentModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="doc-modal-overlay" onClick={onClose}>
      <div className="doc-modal-window" onClick={(e) => e.stopPropagation()}>
        
        {/* Trang trí góc (Corner Accents) */}
        <div className="corner corner-tl"></div>
        <div className="corner corner-tr"></div>
        <div className="corner corner-bl"></div>
        <div className="corner corner-br"></div>

        {/* Nút đóng chuyên nghiệp */}
        <button className="doc-close-btn" onClick={onClose}>
          <X size={20} /> <span>ĐÓNG</span>
        </button>

        <div className="doc-modal-container">
          {/* CỘT TRÁI: Hình ảnh và Thông tin phụ */}
          <aside className="doc-aside">
            <div className="doc-image-frame">
              <img src={data.image} alt={data.title} />
              <div className="doc-image-overlay"></div>
            </div>
            
            <div className="doc-meta-box">
              <div className="meta-item">
                <Calendar size={16} className="gold-text" />
                <div>
                  <label>Thời gian</label>
                  <p>{data.year}</p>
                </div>
              </div>
              <div className="meta-item">
                <Bookmark size={16} className="gold-text" />
                <div>
                  <label>Phân loại</label>
                  <p>Tư liệu Quốc gia</p>
                </div>
              </div>
            </div>

            {/* Dấu mộc đỏ (Red Stamp Effect) */}
            <div className="doc-stamp">
              MẬT
            </div>
          </aside>

          {/* CỘT PHẢI: Nội dung chính */}
          <main className="doc-main">
            <header className="doc-header">
              <div className="doc-id-badge">HỒ SƠ SỐ: CPV-1954/65-01</div>
              <h2 className="doc-main-title">{data.title}</h2>
              <div className="doc-line"></div>
            </header>

            <div className="doc-body-scroll">
              <section className="doc-section">
                <h3><Award size={18} /> Ý nghĩa chiến lược</h3>
                <p>{data.desc}</p>
              </section>

              <section className="doc-section">
                <h3><FileText size={18} /> Nội dung chi tiết</h3>
                <p>
                  Sự kiện này đánh dấu bước ngoặt quan trọng trong lịch sử Đảng, khẳng định tinh thần tự lực tự cường và tầm nhìn vĩ đại. 
                  Trong bối cảnh đất nước tạm thời bị chia cắt, Đảng đã khéo léo chèo lái con thuyền cách mạng, vừa xây dựng hậu phương 
                  miền Bắc vững mạnh, vừa dồn lực chi viện cho tiền tuyến miền Nam...
                </p>
                <p>
                  Toàn bộ diễn biến đã được ghi chép và lưu trữ nhằm giáo dục thế hệ mai sau về lòng yêu nước và ý chí quật cường 
                  của dân tộc Việt Nam.
                </p>
              </section>
            </div>

            
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;