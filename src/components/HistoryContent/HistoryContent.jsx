import React from "react";
import {
  BookOpen,
  Layers,
  Scale,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import "./HistoryContent.css";

const HistoryContent = () => {
  return (
    <div className="history-container">
      {/* Section 1: Khái niệm */}
      <div className="h-section war-strategy">
        <h4 className="h-title title-red">
          <BookOpen size={18} /> Khái Niệm (Theo lý luận Mác – Lênin)
        </h4>
        <ul className="h-list arrow-red">
          <li>
            Là giai đoạn phát triển cao của nền sản xuất hàng hóa, nơi các yếu tố
            sản xuất (lao động, vốn, hàng hóa, dịch vụ) vận hành theo quy luật
            giá trị, cung – cầu và cạnh tranh.
          </li>
          <li>
            Trong đó, giá cả thị trường là tín hiệu chủ yếu điều tiết sản xuất và
            lưu thông.
          </li>
          <li>
            Các-Mác gọi đây là "sản xuất hàng hóa phát triển toàn diện" – khi
            quan hệ hàng hóa – tiền tệ chi phối hầu hết các lĩnh vực kinh tế.
          </li>
        </ul>
      </div>

      {/* Section 2: Đặc trưng */}
      <div className="h-section victories">
        <h4 className="h-title title-yellow">
          <Layers size={18} /> Đặc trưng cơ bản
        </h4>
        <div className="v-timeline">
          <ul className="h-list arrow-red">
            <li>Nhiều chủ thể kinh tế tham gia (tư nhân, nhà nước, tập thể...).</li>
            <li>
              Tự do kinh doanh và cạnh tranh bình đẳng trong khuôn khổ pháp luật.
            </li>
            <li>Giá cả, cung – cầu là công cụ điều tiết chủ yếu.</li>
            <li>Lợi nhuận là mục tiêu kinh tế trung tâm của doanh nghiệp.</li>
            <li>Thị trường mở, hội nhập quốc tế là xu thế tất yếu.</li>
          </ul>
        </div>
      </div>

      {/* Section 3: Ưu – Hạn chế */}
      <div className="h-section party-line">
        <h4 className="h-title title-green">
          <Scale size={18} /> Ưu điểm – Hạn chế
        </h4>

        <div className="h-grid">
          <div className="h-card">
            <div className="card-head">
              <TrendingUp size={14} /> Ưu điểm
            </div>
            <ul>
              <li>Khai thác hiệu quả các nguồn lực.</li>
              <li>Kích thích đổi mới, sáng tạo, tăng năng suất lao động.</li>
              <li>Thúc đẩy tăng trưởng kinh tế.</li>
            </ul>
          </div>

          <div className="h-card">
            <div className="card-head">
              <AlertTriangle size={14} /> Hạn chế
            </div>
            <ul>
              <li>
                Dễ dẫn tới phân hóa giàu nghèo, độc quyền tư bản và bất bình đẳng
                xã hội.
              </li>
              <li>
                Không tự giải quyết được các vấn đề công bằng, phúc lợi và môi
                trường.
              </li>
              <li>Phát sinh các vấn đề đô thị hóa và xã hội.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryContent;
