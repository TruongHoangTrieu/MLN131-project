import React, { useState } from "react";
import { Volume2, MoveRight } from "lucide-react";
import ComparisonDetailModal from "../ComparisonModal/ComparisonModal";
import "./ComparisonLayout.css";

const ComparisonLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // 1. Khai báo dữ liệu chi tiết cho 2 bên
  const comparisonData = {
    tbcn: {
  title: "Kinh tế thị trường Tư bản chủ nghĩa",
  year: "Lịch sử phát triển",
  desc: "Mô hình kinh tế dựa trên sở hữu tư nhân và vận hành theo cơ chế thị trường tự do.",
  sections: [
    {
      label: "MỤC TIÊU",
      content: "Lợi nhuận và lợi ích của nhà đầu tư (tư bản) là trên hết."
    },
    {
      label: "SỞ HỮU",
      content: "Sở hữu tư nhân là tuyệt đối, tư nhân nắm hầu hết tư liệu sản xuất."
    },
    {
      label: "VAI TRÒ NHÀ NƯỚC",
      content:
        "Can thiệp để bảo vệ lợi ích của giai cấp tư sản và hạn chế khủng hoảng."
    },
    {
      label: "PHÂN PHỐI LỢI ÍCH",
      content: "Tự do cạnh tranh, phân phối theo sức mạnh thị trường."
    },
    {
      label: "XÃ HỘI",
      content:
        "Phân hóa giàu nghèo lớn là điều tất yếu (“mạnh được yếu thua”)."
    }
  ]
},
    xhcn: {
  title: "Kinh tế thị trường định hướng XHCN",
  year: "Thời kỳ quá độ",
  desc:
    "Mô hình kinh tế kết hợp cơ chế thị trường với định hướng xã hội chủ nghĩa, lấy con người làm trung tâm của sự phát triển.",
  sections: [
    {
      label: "MỤC TIÊU",
      content:
        "Con người là trung tâm; hướng tới Dân giàu, nước mạnh. Lợi nhuận quan trọng nhưng phải gắn với tiến bộ và công bằng xã hội."
    },
    {
      label: "SỞ HỮU",
      content:
        "Đa dạng hình thức sở hữu: nhà nước, tư nhân, tập thể, vốn nước ngoài. Trong đó, kinh tế nhà nước giữ vai trò chủ đạo."
    },
    {
      label: "VAI TRÒ NHÀ NƯỚC",
      content:
        "Quản lý, định hướng và điều tiết nền kinh tế nhằm bảo vệ quyền lợi của nhân dân lao động và giảm bất công xã hội."
    },
    {
      label: "PHÂN PHỐI LỢI ÍCH",
      content:
        "Dân chủ, công bằng, nhân văn; chủ yếu theo kết quả lao động, hiệu quả kinh tế và thông qua phúc lợi xã hội."
    },
    {
      label: "XÃ HỘI",
      content:
        "Tăng trưởng kinh tế gắn liền với xóa đói giảm nghèo, không để ai bị bỏ lại phía sau."
    }
  ]
}
  };

  const handleOpenDetail = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  return (
    <section className="vs-container">

      {/* Nửa bên trái */}
      <div className="vs-side north">
        <div className="side-overlay"></div>
        <div className="side-content">
          <h1 className="side-title">
            Kinh tế thị trường <br /> <span className="text-blue">Tư bản chủ nghĩa</span>
          </h1>
          
          {/* Chuyển div thành button */}
          <button 
            className="side-quote quote-blue btn-detail" 
            onClick={() => handleOpenDetail(comparisonData.tbcn)}
          >
            XEM CHI TIẾT <MoveRight size={16} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </div>

      <div className="vs-divider">
        <div className="vs-circle">
          <div className="vs-star">★</div>
          <span>VS</span>
        </div>
      </div>

      {/* Nửa bên phải */}
      <div className="vs-side south">
        <div className="side-overlay"></div>
        <div className="side-content">
          <h1 className="side-title">
            Kinh tế thị trường <br /> <span className="text-red">định hướng XHCN</span>
          </h1>
          
          {/* Chuyển div thành button */}
          <button 
            className="side-quote quote-red btn-detail" 
            onClick={() => handleOpenDetail(comparisonData.xhcn)}
          >
            XEM CHI TIẾT <MoveRight size={16} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </div>

      {/* Tích hợp Modal chung */}
      <ComparisonDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedData}
      />
    </section>
  );
};

export default ComparisonLayout;