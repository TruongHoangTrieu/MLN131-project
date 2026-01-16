import React, { useState } from "react";
import { Globe, Star, Plus, X } from "lucide-react";
import "./KnowledgeSection.css";
import HistoryContent from "../HistoryContent/HistoryContent";
import RevolutionPhase from "../RevolutionPhase/RevolutionPhase";

const KnowledgeSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const knowledgeData = [
    {
      id: 1,
      title: "I. Kinh Tế Thị Trường",
      icon: <Globe size={20} />,
      content: <HistoryContent />,
    },
    {
      id: 2,
      title: "II. Chủ Nghĩa Xã Hội",
      icon: <Star size={20} />,
      content: <RevolutionPhase />
    },
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
          <h2 className="section-title ">
            Kinh Tế Thị Trường Định Hướng <br /> Xã Hội Chủ Nghĩa <br />
          </h2>
          <p className="section-desc highlight-gold">Mô hình kinh tế tổng quát trong thời kỳ quá độ lên CNXH</p>
          <p className="section-subtitle">
            Giai đoạn phát triển đột phá mang tính lịch sử, vận dụng sáng tạo quy luật thị trường vào thực tiễn Việt Nam nhằm mục tiêu: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.
          </p>
        </div>

        {/* Danh sách Accordion */}
        <div className="accordion-list">
          {knowledgeData.map((item, index) => (
            <div
              key={item.id}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
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
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
