import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import "./HistoryTimeline.css";
import HistoryModal from "../HistoryModal/HistoryModal";

const HistoryTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
const timelineData = [
  {
    year: "",
    title: "Khái niệm",
    image: "/1.png",
    shortDesc:
      "Mô hình kinh tế kết hợp cơ chế thị trường với định hướng xã hội chủ nghĩa dưới sự quản lý của Nhà nước.",

    fullDesc: [
      "Là mô hình kinh tế đặc thù của Việt Nam, kết hợp giữa nguyên lý vận hành của kinh tế thị trường và mục tiêu, bản chất của chủ nghĩa xã hội.",
      "Nói cách khác: vẫn dựa trên cơ chế thị trường, nhưng có Nhà nước XHCN quản lý, định hướng, nhằm đảm bảo phát triển bền vững, công bằng, vì con người.",
    ],
    highlights: [
      "Vận hành theo nguyên lý thị trường hiện đại, cạnh tranh bình đẳng",
      "Nhà nước XHCN điều tiết, định hướng để bảo vệ lợi ích nhân dân.",
      "Phát triển bền vững, công bằng, vì sự nghiệp con người.",
    ],
  },
  {
    year: "",
    title: "Mục tiêu",
    image: "/2.png",
    shortDesc:
      "Hướng tới phát triển kinh tế gắn với nâng cao đời sống nhân dân và tiến bộ xã hội.",

    fullDesc: [],
    highlights: [
      "Hướng tới thực hiện “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.”",
      "Nâng cao đời sống cho mọi tầng lớp nhân dân, đẩy mạnh xóa đói giảm nghèo.",
      "Mục tiêu hàng đầu là giải phóng sức sản xuất, phát triển lực lượng sản xuất để xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội.",
    ],
  },
  {
    year: "",
    title: "Bản chất",
    image: "/3.png",
    shortDesc:
      "Vừa tuân theo quy luật thị trường, vừa bảo đảm định hướng xã hội chủ nghĩa.",

    fullDesc: [],
    highlights: [
      "Vừa tuân theo quy luật kinh tế thị trường, vừa chịu sự chi phối của các nguyên tắc XHCN (công bằng, tiến bộ, vì lợi ích nhân dân).",
      "Nhà nước giữ vai trò “kiến tạo – điều tiết – định hướng”, chứ không “can thiệp hành chính” như trước đây.",
    ],
  },
  {
    year: "",
    title: "Quan hệ sở hữu và thành phần kinh tế",
    image: "/4.png",
    shortDesc:
      "Tồn tại nhiều hình thức sở hữu và nhiều thành phần kinh tế cùng phát triển.",

    fullDesc: [
      "Nền kinh tế tồn tại nhiều hình thức sở hữu và nhiều thành phần kinh tế khác nhau",
    ],
    highlights: [
      "Kinh tế nhà nước: giữ vai trò chủ đạo trong những lĩnh vực then chốt để điều tiết nền kinh tế.",
      "Kinh tế tư nhân: là động lực quan trọng của nền kinh tế.",
      "Kinh tế tập thể, hợp tác xã: cùng phát triển hài hòa.",
      "Kinh tế có vốn đầu tư nước ngoài (FDI): được khuyến khích phát triển nhằm hội nhập quốc tế.",
    ],
  },
  {
    year: "",
    title: "Quan hệ phân phối",
    image: "/5.png",
    shortDesc:
      "Phân phối thu nhập gắn với lao động, hiệu quả kinh tế và an sinh xã hội.",

    fullDesc: [
      "Các điểm cụ thể về cách thức phân phối lợi ích trong nền kinh tế — một đặc trưng quan trọng của tính “định hướng”.",
    ],
    highlights: [
      "Thực hiện đa dạng các hình thức phân phối nhằm tạo động lực cho sự phát triển.",
      "Phân phối theo lao động là hình thức chủ yếu.",
      "Kết hợp phân phối theo vốn, nguồn lực khác và thông qua phúc lợi xã hội.",
    ],
  },
  {
    year: "",
    title: "Quan hệ giữa tăng trưởng kinh tế với công bằng xã hội",
    image: "/6.png",
    shortDesc:
      "Kết hợp tăng trưởng kinh tế với bảo đảm công bằng và tiến bộ xã hội.",

    fullDesc: [],
    highlights: [
      "Thị trường đóng vai trò quyết định trong huy động và phân bổ nguồn lực.",
      "Nhà nước quản lý, điều tiết thông qua pháp luật và công cụ vĩ mô.",
      "Can thiệp để khắc phục khuyết tật của thị trường, bảo đảm mục tiêu xã hội.",
    ],
  },
  {
    year: "",
    title: "Quan hệ quản lý nền kinh tế",
    image: "/7.png",
    shortDesc:
      "Nhà nước quản lý nền kinh tế bằng pháp luật, chiến lược và định hướng phát triển.",

    fullDesc: [],
    highlights: [
      "Hướng tới thực hiện “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.”",
      "Nâng cao đời sống cho mọi tầng lớp nhân dân.",
      "Giải phóng sức sản xuất, phát triển lực lượng sản xuất.",
    ],
  },
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
          <div className="timeline-badge">Đất nước thời kỳ quá độ lên CNXH</div>
          <h2 className="timeline-main-title">
            Nền Kinh tế thị trường định hướng Xã hội Chủ nghĩa ở Việt Nam
          </h2>
          <p className="timeline-quote">
            "Những kiến thức quan trọng trong quá trình chuyển đổi từ kinh tế kế
            hoạch tập trung sang kinh tế thị trường định hướng XHCN."
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
                <p className="card-desc">{item.shortDesc}</p>
                <div className="card-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                  />
                </div>
                <button
                  className="view-more-btn"
                  onClick={() => handleOpenModal(item)}
                >
                  XEM TƯ LIỆU <MoveRight size={16} />
                </button>

                {/* Số năm mờ làm nền cho thẻ */}
                <span className="bg-year-text">{item.year.split(" ")[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HistoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedEvent}
      />
    </section>
  );
};

export default HistoryTimeline;
