import React, { useState } from "react";
import { 
  BookOpen, 
  Target, 
  Factory, 
  Swords, 
  Landmark, 
  Plus, 
  X 
} from "lucide-react";
import "./KnowledgeSection.css";

const KnowledgeSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const knowledgeData = [
    { id: 1, title: "Bối cảnh lịch sử", icon: <BookOpen size={20} /> },
    { id: 2, title: "I. Đường lối chung và vai trò của mỗi miền", icon: <Target size={20} /> },
    { id: 3, title: "II. Xây dựng CNXH ở miền Bắc (1961-1965)", icon: <Factory size={20} /> },
    { id: 4, title: "III. Cách mạng miền Nam - 'Chiến tranh đặc biệt'", icon: <Swords size={20} /> },
    { id: 5, title: "IV. Ý nghĩa lịch sử", icon: <Landmark size={20} /> },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="knowledge-section">
      {/* Lớp phủ họa tiết nền stardust */}
      <div className="section-texture-overlay"></div>

      <div className="knowledge-container">
        {/* Header Section */}
        <div className="section-header">
          <div className="section-badge">
            <span>TỔNG HỢP KIẾN THỨC</span>
          </div>
          <h2 className="section-title">
            Xây dựng CNXH ở miền Bắc, phát triển thế tiến công <br />
            <span className="highlight-gold">của cách mạng miền Nam (1961-1965)</span>
          </h2>
          <p className="section-subtitle">
            Giai đoạn lịch sử quan trọng, đặt nền móng vững chắc cho sự nghiệp
            giải phóng miền Nam, thống nhất đất nước.
          </p>
        </div>

        {/* Danh sách Accordion */}
        <div className="accordion-list">
          {knowledgeData.map((item, index) => (
            <div
              key={item.id}
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-header">
                <div className="header-left">
                  <div className="icon-box">{item.icon}</div>
                  <span className="item-title">{item.title}</span>
                </div>
                <span className="dropdown-arrow">
                  {activeIndex === index ? <X size={18} /> : <Plus size={18} />}
                </span>
              </div>

              <div className="accordion-content">
                <div className="content-inner">
                  <p>
                    Nội dung chi tiết về <strong>{item.title}</strong> đang được
                    tổng hợp từ nguồn tư liệu chính thống của Đảng và Nhà nước...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestones Bar */}
        <div className="knowledge-milestones">
          {[
            { year: "1960", desc: "ĐẠI HỘI III" },
            { year: "1961", desc: "KẾ HOẠCH 5 NĂM" },
            { year: "1963", desc: "CHIẾN THẮNG ẤP BẮC" },
            { year: "1965", desc: "PHÁ SẢN CTĐB" },
          ].map((m, i) => (
            <div key={i} className="milestone-item">
              <span className="ms-year">{m.year}</span>
              <span className="ms-desc">{m.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;