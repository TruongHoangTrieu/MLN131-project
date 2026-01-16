import React from "react";
import {
  Landmark,
  TrendingUp,
  Handshake,
  Gavel,
  BarChart3,
  FileText,
  Wheat,
  Hammer,
  Star,
  Heart,
  ClipboardList
} from "lucide-react";
import "./RevolutionPhase.css";

const RevolutionPhase = () => {
  return (
    <div className="rev-container">
      {/* 1. Đặc điểm xuất phát */}
      <div className="rev-section origin-box">
        <h4 className="rev-title title-gold">
          <Landmark size={20} /> Khái niệm
        </h4>
        <ul className="rev-list bullet-dot">
          <li>
            Là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động
            chống lại áp bức, bất công, chống các giai cấp thống trị.
          </li>
          <li>
            Là trào lưu tư tưởng, lý luận phản ánh lý tưởng giải phóng nhân dân
            lao động khỏi áp bức, bóc lột, bất công.
          </li>
          <li>
            Là một khoa học - CNXH khoa học, khoa học về sứ mệnh lịch sử của
            GCCN.
          </li>
          <li>
            Là một chế độ xã hội tốt đẹp, giai đoạn đầu của hình thái KT-XH
            CSCN.
          </li>
        </ul>
      </div>
      <div className="rev-grid-header">
        <h4 className="rev-title title-white">
          <ClipboardList size={20} /> ĐẶC TRƯNG
        </h4>
      </div>
      {/* 2. Grid 4 ô nội dung */}
      <div className="rev-grid-main">
        <div className="rev-card-mini border-blue">
          <h5 className="rev-card-title text-blue">
            <TrendingUp size={16} /> Giải phóng giai cấp, dân tộc, xã hội và con người:
          </h5>
          <p>
            Tạo điều kiện để con người phát triển toàn diện; thay thế xã hội cũ bằng một liên hợp mà ở đó sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người.
          </p>
        </div>

        <div className="rev-card-mini border-purple">
          <h5 className="rev-card-title text-purple">
            <Handshake size={16} /> Do nhân dân lao động làm chủ
          </h5>
          <p>
            Đây là đặc trưng về bản chất của Chủ nghĩa xã hội — một xã hội vì con người và do con người; nhân dân lao động là chủ thể thực hiện quyền làm chủ trong quá trình xây dựng xã hội mới.
          </p>
        </div>

        <div className="rev-card-mini border-red">
          <h5 className="rev-card-title text-red">
            <Gavel size={16} /> Có nền kinh tế phát triển cao
          </h5>
          <p>
            Dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu; mục tiêu là giải phóng con người trên cơ sở điều kiện kinh tế - xã hội phát triển và phân phối chủ yếu theo lao động.
          </p>
        </div>

        <div className="rev-card-mini border-yellow">
          <h5 className="rev-card-title text-yellow">
            <BarChart3 size={16} /> Có nhà nước kiểu mới
          </h5>
          <p>
            Nhà nước mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động; thực hiện dân chủ cho tuyệt đại đa số nhân dân.
          </p>
        </div>
        <div className="rev-card-mini border-yellow">
          <h5 className="rev-card-title text-yellow">
            <BarChart3 size={16} /> Có nền văn hóa phát triển cao
          </h5>
          <p>
            Kế thừa và phát huy những giá trị của văn hóa dân tộc và tinh hoa văn minh nhân loại; văn hóa là nền tảng tinh thần và động lực cho sự phát triển xã hội.
          </p>
        </div>
        <div className="rev-card-mini border-yellow">
          <h5 className="rev-card-title text-yellow">
            <BarChart3 size={16} /> Bảo đảm bình đẳng, đoàn kết giữa các dân tộc
          </h5>
          <p>
            Có quan hệ hữu nghị và hợp tác với nhân dân các nước trên thế giới; giải quyết vấn đề dân tộc và giai cấp dựa trên nguyên tắc xóa bỏ tình trạng người bóc lột người.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionPhase;
