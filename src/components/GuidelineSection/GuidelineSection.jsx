import React from "react";
import { 
  Flag, Star, CheckCircle2, ArrowRightCircle,
  Map, Banknote, Scale, Landmark
} from "lucide-react";
import "./GuidelineSection.css";

const GuidelineSection = () => {
  const guidelines = [
    {
      id: "01",
      title: "Chương trình 135",
      icon: <Map size={24} />,
      quote: "Phát triển bền vững vùng đồng bào dân tộc thiểu số.",
      shortDesc: "Tập trung phát triển kinh tế – xã hội các xã đặc biệt khó khăn miền núi, vùng sâu, vùng xa.",
      details: [
        "Đầu tư cơ sở hạ tầng thiết yếu (Điện, đường, trường, trạm).",
        "Hỗ trợ chuyển đổi cơ cấu cây trồng, vật nuôi năng suất cao.",
        "Nâng cao trình độ dân trí và đào tạo cán bộ tại chỗ.",
        "Xóa bỏ hủ tục, gìn giữ bản sắc văn hóa dân tộc."
      ],
      color: "#ff4d4d", // Đỏ
    },
    {
      id: "02",
      title: "Tín dụng Chính sách",
      icon: <Banknote size={24} />,
      quote: "Trao 'cần câu' thay vì 'con cá' để người dân thoát nghèo.",
      shortDesc: "Hệ thống ưu đãi cho hộ nghèo, cận nghèo vay vốn sản xuất thông qua NHCSXH.",
      details: [
        "Cho vay vốn ưu đãi với lãi suất thấp, không cần tài sản thế chấp.",
        "Tạo việc làm tại địa phương thông qua các dự án sản xuất.",
        "Hỗ trợ học sinh, sinh viên có hoàn cảnh khó khăn vay vốn học tập.",
        "Đảm bảo an sinh xã hội thông qua các quỹ tiết kiệm cộng đồng."
      ],
      color: "#ffd700", // Vàng
    },
    {
      id: "03",
      title: "Tăng trưởng & Công bằng",
      icon: <Scale size={24} />,
      quote: "Không hy sinh tiến bộ và công bằng xã hội để chạy theo kinh tế.",
      shortDesc: "Khẳng định cam kết của Việt Nam về một mô hình tăng trưởng hài hòa và bền vững.",
      details: [
        "Phân phối thành quả phát triển hài hòa giữa các tầng lớp xã hội.",
        "Thu hẹp khoảng cách giàu nghèo giữa thành thị và nông thôn.",
        "Coi con người là trung tâm, là mục tiêu của sự phát triển.",
        "Gắn tăng trưởng kinh tế với bảo vệ môi trường và an sinh xã hội."
      ],
      color: "#00c6ff", // Xanh dương
    },
  ];

  return (
    <section className="guideline-section">
      <header className="guideline-header">
        <h2 className="header-main-title">
          Minh chứng thực tiễn tính <span className="highlight-gold">Định hướng XHCN</span>
        </h2>
        <div className="header-divider">
          <Star size={20} fill="#ff4d4d" stroke="none" />
        </div>
        <p className="header-subtitle">Di chuột vào các thẻ để xem nội dung chi tiết của từng chính sách</p>
      </header>

      <div className="guideline-grid">
        {guidelines.map((item) => (
          <div 
            key={item.id} 
            className="flip-card-container"
            style={{"--card-theme": item.color}}
          >
            <div className="flip-card-inner">
              
              {/* --- MẶT TRƯỚC --- */}
              <div className="card-front">
                <div className="card-top-bar">
                  <span className="card-id">{item.id}</span>
                  <div className="card-icon">{item.icon}</div>
                </div>
                <h3 className="front-title">{item.title}</h3>
                <div className="quote-box">
                  <p>"{item.quote}"</p>
                </div>
                <p className="short-desc">{item.shortDesc}</p>
                <div className="hover-hint">
                  <ArrowRightCircle size={16} /> Lật xem chi tiết
                </div>
              </div>

              {/* --- MẶT SAU --- */}
              <div className="card-back">
                <h3 className="back-title">Nội dung trọng tâm</h3>
                <ul className="details-list">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="list-icon" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="back-footer">
                  <Star size={20} fill={item.color} stroke="none" />
                  Chính sách An sinh xã hội
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuidelineSection;