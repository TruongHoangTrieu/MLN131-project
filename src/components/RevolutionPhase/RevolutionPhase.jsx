import React from "react";
import {
  FileText,
  Star,
  Heart,
  Hammer,
  Gavel,
  Book,
  Wheat,
  ClipboardList,
} from "lucide-react";
import "./RevolutionPhase.css";

const RevolutionPhase = () => {
  return (
    <div className="rev-container">
      {/* 1. Khái niệm */}
      <div className="rev-section origin-box">
        <h4 className="rev-title title-gold">
          <FileText size={20} /> Khái niệm
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
            Là một khoa học – CNXH khoa học, khoa học về sứ mệnh lịch sử của
            giai cấp công nhân.
          </li>
          <li>
            Là một chế độ xã hội tốt đẹp, giai đoạn đầu của hình thái
            kinh tế – xã hội cộng sản chủ nghĩa.
          </li>
        </ul>
      </div>

      {/* Đặc trưng */}
      <div className="rev-grid-header">
        <h4 className="rev-title title-white">
          <ClipboardList size={20} /> ĐẶC TRƯNG
        </h4>
      </div>

      {/* Grid nội dung */}
      <div className="rev-grid-main">
        <div className="rev-card-mini border-blue">
          <h5 className="rev-card-title text-blue">
            <Star size={16} /> Giải phóng giai cấp, dân tộc, xã hội và con người
          </h5>
          <p>
            Tạo điều kiện để con người phát triển toàn diện; thay thế xã hội cũ
            bằng một liên hợp mà ở đó sự phát triển tự do của mỗi người là điều
            kiện cho sự phát triển tự do của tất cả mọi người.
          </p>
        </div>

        <div className="rev-card-mini border-purple">
          <h5 className="rev-card-title text-purple">
            <Heart size={16} /> Do nhân dân lao động làm chủ
          </h5>
          <p>
            Đây là đặc trưng về bản chất của CNXH — một xã hội vì con người và do
            con người; nhân dân lao động là chủ thể thực hiện quyền làm chủ.
          </p>
        </div>

        <div className="rev-card-mini border-red">
          <h5 className="rev-card-title text-red">
            <Hammer size={16} /> Có nền kinh tế phát triển cao
          </h5>
          <p>
            Dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu
            sản xuất chủ yếu; phân phối chủ yếu theo lao động.
          </p>
        </div>

        <div className="rev-card-mini border-yellow">
          <h5 className="rev-card-title text-yellow">
            <Gavel size={16} /> Có nhà nước kiểu mới
          </h5>
          <p>
            Nhà nước mang bản chất giai cấp công nhân, đại biểu cho lợi ích,
            quyền lực và ý chí của nhân dân lao động.
          </p>
        </div>

        <div className="rev-card-mini border-yellow">
          <h5 className="rev-card-title text-yellow">
            <Book size={16} /> Có nền văn hóa phát triển cao
          </h5>
          <p>
            Kế thừa và phát huy giá trị văn hóa dân tộc và tinh hoa văn minh
            nhân loại; văn hóa là nền tảng tinh thần của xã hội.
          </p>
        </div>

        <div className="rev-card-mini border-yellow">
          <h5 className="rev-card-title text-yellow">
            <Wheat size={16} /> Bảo đảm bình đẳng, đoàn kết giữa các dân tộc
          </h5>
          <p>
            Xây dựng quan hệ hữu nghị, hợp tác giữa các dân tộc; xóa bỏ tình
            trạng người bóc lột người trên phạm vi toàn thế giới.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionPhase;
