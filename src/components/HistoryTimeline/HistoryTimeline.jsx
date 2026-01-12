import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import "./HistoryTimeline.css";
import DocumentModal from "../DocumentModal/DocumentModal";

const HistoryTimeline = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timelineData = [
    {
      year: "1954",
      title: "Hiệp định Genève",
      desc: "Kết thúc cuộc kháng chiến chống Pháp. Miền Bắc giải phóng, bắt đầu thời kỳ quá độ lên CNXH.",
      image: "/picture-1.png",
    },
    {
      year: "1955 - 1957",
      title: "Khôi phục kinh tế",
      desc: "Miền Bắc hoàn thành cải cách ruộng đất, khôi phục kinh tế sau chiến tranh, ổn định đời sống nhân dân.",
      image: "https://file1.dangcongsan.vn/data/0/images/2023/04/14/ctv/cai-cach-ruong-dat.jpg",
    },
    {
      year: "1959 - 1960",
      title: "Phong trào Đồng khởi",
      desc: "Chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công, phá vỡ từng mảng bộ máy cai trị của địch.",
      image: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e0/Dong_Khoi.jpg/300px-Dong_Khoi.jpg",
    },
    {
      year: "1960",
      title: "Đại hội Đảng lần thứ III",
      desc: "Xác định nhiệm vụ chiến lược của cách mạng hai miền và vai trò của miền Bắc là hậu phương lớn.",
      image: "https://baochinhphu.s3.amazonaws.com/Images/2021/01/18/Dai-hoi-III.jpg",
    }
  ];
  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className="history-timeline">
      <div className="section-texture-overlay"></div>
      
      <div className="timeline-container">
        <header className="timeline-header">
          <div className="timeline-badge">GIAI ĐOẠN 1954 - 1965</div>
          <h2 className="timeline-main-title">
            Dòng Chảy <span className="highlight-gold">Lịch Sử</span>
          </h2>
          <p className="timeline-quote">
            "Những mốc son quan trọng trong giai đoạn xây dựng CNXH ở miền Bắc <br />
            và đấu tranh giải phóng miền Nam."
          </p>
        </header>

        <div className="timeline-body">
          {/* Trục dọc giữa */}
          <div className="vertical-line"></div>

          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              {/* Điểm nút trên trục */}
              <div className="timeline-dot"></div>

              {/* Thẻ nội dung */}
              <div className="timeline-card">
                <div className="card-header">
                  <span className="card-year">{item.year}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-desc">{item.desc}</p>
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                <button className="view-more-btn" onClick={() => handleOpenModal(item)}>
                  XEM TƯ LIỆU <MoveRight size={16} />
                </button>
                
                {/* Số năm mờ làm nền cho thẻ */}
                <span className="bg-year-text">{item.year.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DocumentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={selectedEvent} 
      />
    </section>
  );
};

export default HistoryTimeline;