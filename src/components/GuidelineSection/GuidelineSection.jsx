import React from "react";
import { 
  Flag, Flame, Users, Swords, Shield, 
  ArrowRightCircle, Star, CheckCircle2 
} from "lucide-react";
import "./GuidelineSection.css";

const GuidelineSection = () => {
  const guidelines = [
    {
      id: "01",
      title: "Đường lối chiến lược",
      icon: <Flag size={24} />,
      quote: "Miền Bắc là nền tảng, miền Nam là tiền tuyến.",
      shortDesc: "Xác định nhiệm vụ cách mạng XHCN ở miền Bắc và Cách mạng dân tộc dân chủ ở miền Nam.",
      details: [
        "Tiến hành đồng thời hai chiến lược cách mạng.",
        "Mối quan hệ mật thiết, tác động qua lại lẫn nhau.",
        "Miền Bắc là hậu phương lớn, quyết định nhất.",
        "Miền Nam là tiền tuyến lớn, quyết định trực tiếp."
      ],
      color: "#ff4d4d", // Đỏ
    },
    {
      id: "02",
      title: "Chuyển hướng 1959",
      icon: <Flame size={24} />,
      quote: "Con đường phát triển cơ bản là khởi nghĩa.",
      shortDesc: "Nghị quyết 15: Chuyển từ đấu tranh chính trị sang kết hợp đấu tranh vũ trang.",
      details: [
        "Ra đời trong bối cảnh Mỹ - Diệm đàn áp dã man.",
        "Khởi đầu cho phong trào Đồng Khởi (1959-1960).",
        "Hình thành mặt trận dân tộc giải phóng miền Nam.",
        "Bước ngoặt quan trọng của cách mạng miền Nam."
      ],
      color: "#f59e0b", // Cam vàng
    },
    {
      id: "03",
      title: "Chi viện Bắc - Nam",
      icon: <Users size={24} />,
      quote: "Thóc không thiếu một cân, quân không thiếu một người.",
      shortDesc: "Tổ chức tuyến đường vận tải chiến lược huyền thoại trên bộ và trên biển.",
      details: [
        "Mở đường Trường Sơn (Hồ Chí Minh) năm 1959.",
        "Mở đường Hồ Chí Minh trên biển.",
        "Vận chuyển hàng triệu tấn vũ khí, lương thực.",
        "Đưa hàng vạn cán bộ, chiến sĩ vào Nam chiến đấu."
      ],
      color: "#9ca3af", // Xám bạc
    },
    {
      id: "04",
      title: "Nghệ thuật quân sự",
      icon: <Swords size={24} />,
      quote: "Bám thắt lưng địch mà đánh.",
      shortDesc: "Sáng tạo phương châm đấu tranh 'Ba mũi giáp công' độc đáo.",
      details: [
        "Kết hợp đấu tranh: Quân sự, Chính trị, Binh vận.",
        "Đánh địch trên cả 3 vùng chiến lược: Rừng núi, Nông thôn, Đô thị.",
        "Chiến tranh du kích kết hợp chiến tranh chính quy.",
        "Tiêu biểu: Chiến thắng Ấp Bắc, Bình Giã..."
      ],
      color: "#ef4444", // Đỏ tươi
    },
    {
      id: "05",
      title: "Đại đoàn kết",
      icon: <Shield size={24} />,
      quote: "Đoàn kết, đoàn kết, đại đoàn kết.",
      shortDesc: "Tập hợp lực lượng toàn dân tộc trong các mặt trận thống nhất rộng rãi.",
      details: [
        "Thành lập Mặt trận Tổ quốc Việt Nam (1955).",
        "Thành lập Mặt trận Dân tộc Giải phóng miền Nam VN (1960).",
        "Huy động sức mạnh của mọi tầng lớp nhân dân.",
        "Tranh thủ sự ủng hộ quốc tế."
      ],
      color: "#3b82f6", // Xanh dương
    },
    {
      id: "06", // Thêm một thẻ cho đủ bộ 6 (cân đối lưới 3x2)
      title: "Xây dựng Đảng",
      icon: <Star size={24} />,
      quote: "Đảng lãnh đạo là nhân tố quyết định thắng lợi.",
      shortDesc: "Tăng cường công tác xây dựng, chỉnh đốn Đảng về chính trị, tư tưởng và tổ chức.",
      details: [
        "Tổ chức Đại hội Đảng toàn quốc lần thứ III (1960).",
        "Hoàn thiện đường lối kháng chiến chống Mỹ.",
        "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng.",
        "Đào tạo đội ngũ cán bộ vừa 'hồng' vừa 'chuyên'."
      ],
      color: "#8b5cf6", // Tím
    },
  ];

  return (
    <section className="guideline-section">
      {/* Header giữ nguyên sự trang trọng */}
      <header className="guideline-header">
        <div className="header-badge">
          <Star size={12} fill="#ffd700" /> VAI TRÒ LÃNH ĐẠO
        </div>
        <h2 className="header-main-title">
          Kim Chỉ Nam <br />
          <span className="highlight-gold">Cho Cách Mạng</span>
        </h2>
        <div className="header-divider">
          <Star size={20} fill="#ff4d4d" stroke="none" />
        </div>
        <p className="header-subtitle">
          (Di chuột vào các thẻ để xem nội dung chi tiết)
        </p>
      </header>

      {/* Grid thẻ vuông có hiệu ứng lật */}
      <div className="guideline-grid">
        {guidelines.map((item) => (
          // Container chính tạo không gian 3D
          <div 
            key={item.id} 
            className="flip-card-container"
            style={{"--card-theme": item.color}}
          >
            {/* Lớp bên trong thực hiện việc xoay */}
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
                  Giai đoạn 1954 - 1965
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