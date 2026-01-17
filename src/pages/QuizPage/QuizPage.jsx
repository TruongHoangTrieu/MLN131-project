import React, { useState, useEffect } from "react"; // Thêm useEffect
import { MessageCircle, ChevronRight, RotateCcw, Award } from "lucide-react";
import "./QuizPage.css";
const ALL_QUESTIONS = [
  {
    "id": 1,
    "question": "Theo lý luận của Mác – Lênin, kinh tế thị trường là giai đoạn phát triển cao của hình thức sản xuất nào?",
    "options": [
      { "id": "A", "text": "Sản xuất tự cung tự cấp" },
      { "id": "B", "text": "Sản xuất hàng hóa" },
      { "id": "C", "text": "Sản xuất nông nghiệp lạc hậu" },
      { "id": "D", "text": "Sản xuất theo mệnh lệnh" }
    ],
    "correct": "B",
    "explanation": "Kinh tế thị trường phát triển dựa trên nền tảng sản xuất hàng hóa khi mọi yếu tố đầu vào và đầu ra đều thông qua trao đổi."
  },
  {
    "id": 2,
    "question": "Trong nền kinh tế thị trường, yếu tố nào đóng vai trò là tín hiệu chủ yếu để điều tiết sản xuất và lưu thông?",
    "options": [
      { "id": "A", "text": "Mệnh lệnh của Nhà nước" },
      { "id": "B", "text": "Giá cả thị trường" },
      { "id": "C", "text": "Kế hoạch của doanh nghiệp" },
      { "id": "D", "text": "Chỉ số lạm phát" }
    ],
    "correct": "B",
    "explanation": "Giá cả phản ánh sự biến động của cung cầu, từ đó hướng dẫn các chủ thể kinh tế ra quyết định sản xuất kinh doanh."
  },
  {
    "id": 3,
    "question": "Các-Mác gọi nền kinh tế thị trường là gì khi quan hệ hàng hóa – tiền tệ chi phối hầu hết các lĩnh vực?",
    "options": [
      { "id": "A", "text": "Sản xuất hàng hóa đơn giản" },
      { "id": "B", "text": "Sản xuất hàng hóa phát triển toàn diện" },
      { "id": "C", "text": "Kinh tế tư bản chủ nghĩa sơ khai" },
      { "id": "D", "text": "Thế giới của tiền tệ" }
    ],
    "correct": "B",
    "explanation": "Đây là thuật ngữ Mác dùng để chỉ trạng thái mà mọi yếu tố sản xuất (lao động, vốn...) đều trở thành hàng hóa."
  },
  {
    "id": 4,
    "question": "Đâu là một đặc trưng cơ bản của kinh tế thị trường?",
    "options": [
      { "id": "A", "text": "Chỉ có thành phần kinh tế nhà nước tham gia" },
      { "id": "B", "text": "Sự độc quyền tuyệt đối của các tập đoàn" },
      { "id": "C", "text": "Nhiều chủ thể kinh tế cùng tham gia (tư nhân, nhà nước, tập thể...)" },
      { "id": "D", "text": "Giá cả hoàn toàn do Nhà nước ấn định" }
    ],
    "correct": "C",
    "explanation": "Sự đa dạng các chủ thể là điều kiện cần để tạo ra môi trường cạnh tranh và trao đổi trên thị trường."
  },
  {
    "id": 5,
    "question": "Mục tiêu kinh tế trung tâm của các doanh nghiệp trong nền kinh tế thị trường là gì?",
    "options": [
      { "id": "A", "text": "Phúc lợi xã hội" },
      { "id": "B", "text": "Lợi nhuận" },
      { "id": "C", "text": "Sự bình đẳng tuyệt đối" },
      { "id": "D", "text": "Xây dựng hạ tầng quốc gia" }
    ],
    "correct": "B",
    "explanation": "Lợi nhuận là động lực chính thúc đẩy các doanh nghiệp cải tiến kỹ thuật và tối ưu hóa nguồn lực để cạnh tranh."
  },
  {
    "id": 6,
    "question": "Ưu điểm nào sau đây thuộc về nền kinh tế thị trường?",
    "options": [
      { "id": "A", "text": "Tự động giải quyết vấn đề ô nhiễm môi trường" },
      { "id": "B", "text": "Khai thác hiệu quả các nguồn lực" },
      { "id": "C", "text": "Xóa bỏ hoàn toàn khoảng cách giàu nghèo" },
      { "id": "D", "text": "Đảm bảo công bằng xã hội tuyệt đối" }
    ],
    "correct": "B",
    "explanation": "Cơ chế cạnh tranh buộc các chủ thể phải tìm cách sử dụng nguồn lực (vốn, lao động) sao cho tiết kiệm và hiệu quả nhất."
  },
  {
    "id": 7,
    "question": "Hạn chế của kinh tế thị trường là gì?",
    "options": [
      { "id": "A", "text": "Kích thích đổi mới sáng tạo" },
      { "id": "B", "text": "Thúc đẩy tăng trưởng kinh tế" },
      { "id": "C", "text": "Dễ dẫn tới phân hóa giàu nghèo và độc quyền" },
      { "id": "D", "text": "Tăng năng suất lao động" }
    ],
    "correct": "C",
    "explanation": "Thị trường chỉ quan tâm đến hiệu quả và lợi nhuận, nên thường dẫn đến bất bình đẳng và tích tụ tư bản gây độc quyền."
  },
  {
    "id": 8,
    "question": "Trong kinh tế thị trường, 'thị trường mở' và 'hội nhập quốc tế' được xem là:",
    "options": [
      { "id": "A", "text": "Một lựa chọn ngẫu nhiên" },
      { "id": "B", "text": "Xu thế tất yếu" },
      { "id": "C", "text": "Một trở ngại cho phát triển" },
      { "id": "D", "text": "Chỉ dành cho các nước giàu" }
    ],
    "correct": "B",
    "explanation": "Để mở rộng quy mô sản xuất và lưu thông, việc mở cửa thị trường và hội nhập là quy luật khách quan."
  },
  {
    "id": 9,
    "question": "Công cụ điều tiết chủ yếu của kinh tế thị trường là:",
    "options": [
      { "id": "A", "text": "Quy định hành chính" },
      { "id": "B", "text": "Giá cả, cung – cầu và cạnh tranh" },
      { "id": "C", "text": "Lời kêu gọi từ thiện" },
      { "id": "D", "text": "Sự tự giác của người tiêu dùng" }
    ],
    "correct": "B",
    "explanation": "Đây là các quy luật kinh tế khách quan vận hành trong nền sản xuất hàng hóa."
  },
  {
    "id": 10,
    "question": "Kinh tế thị trường không tự giải quyết được vấn đề nào sau đây?",
    "options": [
      { "id": "A", "text": "Tăng năng suất lao động" },
      { "id": "B", "text": "Đổi mới công nghệ" },
      { "id": "C", "text": "Công bằng xã hội và phúc lợi" },
      { "id": "D", "text": "Phân bổ tài nguyên theo giá cả" }
    ],
    "correct": "C",
    "explanation": "Đây là những vấn đề thuộc về chức năng xã hội và quản lý của Nhà nước, không phải mục tiêu của thị trường."
  },
  {
    "id": 11,
    "question": "Chủ nghĩa xã hội được hiểu dưới góc độ nào sau đây?",
    "options": [
      { "id": "A", "text": "Là một phong trào thực tiễn chống áp bức" },
      { "id": "B", "text": "Là một trào lưu tư tưởng, lý luận" },
      { "id": "C", "text": "Là một khoa học và một chế độ xã hội tốt đẹp" },
      { "id": "D", "text": "Tất cả các phương án trên" }
    ],
    "correct": "D",
    "explanation": "CNXH được tiếp cận đa chiều từ thực tiễn đấu tranh đến hệ thống lý luận khoa học và mô hình chế độ."
  },
  {
    "id": 12,
    "question": "“Khoa học về sứ mệnh lịch sử của giai cấp công nhân” là định nghĩa của:",
    "options": [
      { "id": "A", "text": "Kinh tế chính trị cổ điển" },
      { "id": "B", "text": "Chủ nghĩa xã hội khoa học" },
      { "id": "C", "text": "Chủ nghĩa hiện thực" },
      { "id": "D", "text": "Triết học duy tâm" }
    ],
    "correct": "B",
    "explanation": "CNXH khoa học nghiên cứu con đường và lực lượng (giai cấp công nhân) để giải phóng xã hội."
  },
  {
    "id": 13,
    "question": "Đặc trưng nào sau đây thể hiện bản chất của CNXH là một xã hội vì con người?",
    "options": [
      { "id": "A", "text": "Sự thống trị của một nhóm thiểu số" },
      { "id": "B", "text": "Do nhân dân lao động làm chủ" },
      { "id": "C", "text": "Tích lũy tư bản cá nhân là tối thượng" },
      { "id": "D", "text": "Duy trì sự phân biệt dân tộc" }
    ],
    "correct": "B",
    "explanation": "Nhân dân lao động là chủ thể quyền lực, thực hiện quyền làm chủ trong quá trình xây dựng xã hội mới."
  },
  {
    "id": 14,
    "question": "Chế độ sở hữu nào đối với tư liệu sản xuất chủ yếu là đặc trưng của CNXH?",
    "options": [
      { "id": "A", "text": "Chế độ tư hữu" },
      { "id": "B", "text": "Chế độ công hữu" },
      { "id": "C", "text": "Chế độ chiếm hữu nô lệ" },
      { "id": "D", "text": "Chế độ phong kiến" }
    ],
    "correct": "B",
    "explanation": "Công hữu nhằm mục tiêu giải phóng con người trên cơ sở điều kiện kinh tế - xã hội phát triển và phân phối theo lao động."
  },
  {
    "id": 15,
    "question": "Mục tiêu cao nhất của CNXH là gì?",
    "options": [
      { "id": "A", "text": "Thay thế hoàn toàn máy móc bằng con người" },
      { "id": "B", "text": "Giải phóng giai cấp, dân tộc, xã hội và con người" },
      { "id": "C", "text": "Xóa bỏ hoàn toàn quan hệ hàng hóa" },
      { "id": "D", "text": "Tập trung quyền lực vào giới chủ tư sản" }
    ],
    "correct": "B",
    "explanation": "CNXH tạo điều kiện để con người phát triển toàn diện trong một cộng đồng tự do."
  },
  {
    "id": 16,
    "question": "Nền kinh tế của CNXH dựa trên:",
    "options": [
      { "id": "A", "text": "Lực lượng sản xuất hiện đại" },
      { "id": "B", "text": "Công cụ lao động thô sơ" },
      { "id": "C", "text": "Sự bao cấp hoàn toàn từ nước ngoài" },
      { "id": "D", "text": "Chỉ sản xuất nông nghiệp" }
    ],
    "correct": "A",
    "explanation": "CNXH cần một nền kinh tế phát triển cao dựa trên trình độ kỹ thuật tiên tiến."
  },
  {
    "id": 17,
    "question": "Nhà nước kiểu mới trong CNXH mang bản chất của giai cấp nào?",
    "options": [
      { "id": "A", "text": "Giai cấp tư sản" },
      { "id": "B", "text": "Giai cấp công nhân" },
      { "id": "C", "text": "Giai cấp địa chủ" },
      { "id": "D", "text": "Tầng lớp quý tộc" }
    ],
    "correct": "B",
    "explanation": "Nhà nước này đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động dưới sự lãnh đạo của giai cấp công nhân."
  },
  {
    "id": 18,
    "question": "Nền văn hóa trong CNXH có đặc điểm gì?",
    "options": [
      { "id": "A", "text": "Xóa bỏ sạch trơn văn hóa cũ" },
      { "id": "B", "text": "Kế thừa văn hóa dân tộc và tinh hoa văn minh nhân loại" },
      { "id": "C", "text": "Chỉ sao chép văn hóa phương Tây" },
      { "id": "D", "text": "Chỉ duy trì văn hóa dân gian thô sơ" }
    ],
    "correct": "B",
    "explanation": "Văn hóa được coi là nền tảng tinh thần và động lực cho sự phát triển xã hội."
  },
  {
    "id": 19,
    "question": "Quan hệ giữa các dân tộc trong CNXH được bảo đảm trên nguyên tắc:",
    "options": [
      { "id": "A", "text": "Thôn tính và đồng hóa" },
      { "id": "B", "text": "Bình đẳng, đoàn kết và hữu nghị" },
      { "id": "C", "text": "Phân biệt chủng tộc" },
      { "id": "D", "text": "Cạnh tranh đối đầu" }
    ],
    "correct": "B",
    "explanation": "CNXH xóa bỏ tình trạng người bóc lột người, từ đó xóa bỏ tình trạng dân tộc này áp bức dân tộc khác."
  },
  {
    "id": 20,
    "question": "Hình thức phân phối chủ yếu trong xã hội XHCN là:",
    "options": [
      { "id": "A", "text": "Phân phối theo vốn đóng góp" },
      { "id": "B", "text": "Phân phối theo lao động" },
      { "id": "C", "text": "Phân phối theo may mắn" },
      { "id": "D", "text": "Phân phối bình quân (cào bằng)" }
    ],
    "correct": "B",
    "explanation": "Đây là nguyên tắc công bằng nhất trong giai đoạn thấp của xã hội cộng sản, dựa trên mức độ đóng góp của mỗi người."
  },
  {
    "id": 21,
    "question": "Kinh tế thị trường định hướng XHCN ở Việt Nam là:",
    "options": [
      { "id": "A", "text": "Mô hình kinh tế kế hoạch hóa tập trung" },
      { "id": "B", "text": "Mô hình kinh tế đặc thù kết hợp nguyên lý thị trường và bản chất CNXH" },
      { "id": "C", "text": "Mô hình kinh tế tư bản chủ nghĩa hoàn toàn" },
      { "id": "D", "text": "Mô hình kinh tế tự cung tự cấp" }
    ],
    "correct": "B",
    "explanation": "Đây là sự vận dụng sáng tạo chủ nghĩa Mác-Lênin vào thực tiễn Việt Nam, vẫn dùng cơ chế thị trường nhưng có sự quản lý của Nhà nước XHCN."
  },
  {
    "id": 22,
    "question": "Mục tiêu hàng đầu của kinh tế thị trường định hướng XHCN ở Việt Nam là gì?",
    "options": [
      { "id": "A", "text": "Làm giàu cho các tập đoàn nước ngoài" },
      { "id": "B", "text": "Giải phóng và phát triển lực lượng sản xuất" },
      { "id": "C", "text": "Duy trì sự lạc hậu của nông nghiệp" },
      { "id": "D", "text": "Hạn chế sự sáng tạo của tư nhân" }
    ],
    "correct": "B",
    "explanation": "Phát triển lực lượng sản xuất là để xây dựng cơ sở vật chất - kỹ thuật cho CNXH."
  },
  {
    "id": 23,
    "question": "Trong nền kinh tế thị trường định hướng XHCN, thành phần kinh tế nào giữ vai trò chủ đạo?",
    "options": [
      { "id": "A", "text": "Kinh tế tư nhân" },
      { "id": "B", "text": "Kinh tế nhà nước" },
      { "id": "C", "text": "Kinh tế có vốn đầu tư nước ngoài (FDI)" },
      { "id": "D", "text": "Kinh tế tập thể" }
    ],
    "correct": "B",
    "explanation": "Kinh tế nhà nước nắm giữ các lĩnh vực then chốt để điều tiết và định hướng nền kinh tế."
  },
  {
    "id": 24,
    "question": "Vai trò của kinh tế tư nhân trong nền kinh tế Việt Nam được xác định là:",
    "options": [
      { "id": "A", "text": "Vai trò chủ đạo" },
      { "id": "B", "text": "Động lực quan trọng" },
      { "id": "C", "text": "Thành phần phụ trợ tạm thời" },
      { "id": "D", "text": "Thành phần cần bị xóa bỏ" }
    ],
    "correct": "B",
    "explanation": "Nhà nước khuyến khích tư nhân phát triển để giải phóng sức sản xuất và tạo việc làm."
  },
  {
    "id": 25,
    "question": "Vai trò của Nhà nước trong nền KTTT định hướng XHCN được mô tả là:",
    "options": [
      { "id": "A", "text": "Can thiệp hành chính sâu vào doanh nghiệp" },
      { "id": "B", "text": "Kiến tạo – điều tiết – định hướng" },
      { "id": "C", "text": "Đứng ngoài hoàn toàn các hoạt động kinh tế" },
      { "id": "D", "text": "Chỉ tập trung vào thu thuế" }
    ],
    "correct": "B",
    "explanation": "Nhà nước không làm thay thị trường mà tạo môi trường và điều tiết để khắc phục các khuyết tật của thị trường."
  },
  {
    "id": 26,
    "question": "Ngoài phân phối theo lao động, Việt Nam còn thực hiện hình thức phân phối nào?",
    "options": [
      { "id": "A", "text": "Phân phối theo vốn góp và các nguồn lực khác" },
      { "id": "B", "text": "Phân phối thông qua an sinh và phúc lợi xã hội" },
      { "id": "C", "text": "Cả A và B đều đúng" },
      { "id": "D", "text": "Không thực hiện hình thức nào khác" }
    ],
    "correct": "C",
    "explanation": "Việc đa dạng hình thức phân phối nhằm tạo động lực và đảm bảo an sinh cho người dân."
  },
  {
    "id": 27,
    "question": "Điểm khác biệt cơ bản giữa KTTT Việt Nam và KTTT tư bản chủ nghĩa về mặt xã hội là:",
    "options": [
      { "id": "A", "text": "Chỉ quan tâm đến tăng trưởng kinh tế" },
      { "id": "B", "text": "Gắn kết tăng trưởng với tiến bộ và công bằng xã hội ngay trong từng bước" },
      { "id": "C", "text": "Đợi kinh tế phát triển thật cao mới làm công bằng xã hội" },
      { "id": "D", "text": "Hy sinh công bằng xã hội để đổi lấy GDP" }
    ],
    "correct": "B",
    "explanation": "Đây là đặc trưng phản ánh tính định hướng XHCN, không để ai bị bỏ lại phía sau."
  },
  {
    "id": 28,
    "question": "Trong quản lý nền kinh tế, thị trường đóng vai trò gì?",
    "options": [
      { "id": "A", "text": "Quyết định trong việc huy động và phân bổ các nguồn lực" },
      { "id": "B", "text": "Vai trò thứ yếu sau mệnh lệnh hành chính" },
      { "id": "C", "text": "Không có vai trò gì đáng kể" },
      { "id": "D", "text": "Chỉ đóng vai trò trong tiêu dùng cá nhân" }
    ],
    "correct": "A",
    "explanation": "Nhà nước tôn trọng các quy luật thị trường để phân bổ nguồn lực hiệu quả nhất."
  },
  {
    "id": 29,
    "question": "Nhà nước quản lý và điều tiết kinh tế vĩ mô thông qua công cụ nào?",
    "options": [
      { "id": "A", "text": "Pháp luật, chiến lược, quy hoạch" },
      { "id": "B", "text": "Các công cụ kinh tế (thuế, lãi suất...)" },
      { "id": "C", "text": "Cả A và B đều đúng" },
      { "id": "D", "text": "Chỉ dùng mệnh lệnh bằng văn bản hành chính" }
    ],
    "correct": "C",
    "explanation": "Nhà nước dùng các công cụ gián tiếp và khung pháp lý để định hướng thị trường."
  },
  {
    "id": 30,
    "question": "Nền kinh tế có vốn đầu tư nước ngoài (FDI) được khuyến khích phát triển nhằm:",
    "options": [
      { "id": "A", "text": "Thay thế hoàn toàn kinh tế trong nước" },
      { "id": "B", "text": "Hội nhập quốc tế và tiếp nhận công nghệ, vốn" },
      { "id": "C", "text": "Để các tập đoàn nước ngoài nắm quyền điều hành đất nước" },
      { "id": "D", "text": "Giảm vai trò của kinh tế nhà nước" }
    ],
    "correct": "B",
    "explanation": "FDI là một bộ phận quan trọng cấu thành nền kinh tế, giúp Việt Nam hội nhập sâu rộng."
  },
  {
    "id": 31,
    "question": "So về quan hệ sở hữu, KTTT tư bản chủ nghĩa (TBCN) coi trọng loại hình nào là tuyệt đối?",
    "options": [
      { "id": "A", "text": "Sở hữu nhà nước" },
      { "id": "B", "text": "Sở hữu tư nhân" },
      { "id": "C", "text": "Sở hữu tập thể" },
      { "id": "D", "text": "Sở hữu toàn dân" }
    ],
    "correct": "B",
    "explanation": "Trong mô hình TBCN, tư nhân nắm hầu hết các tư liệu sản xuất chủ yếu."
  },
  {
    "id": 32,
    "question": "Mục tiêu tối thượng của KTTT tư bản chủ nghĩa là:",
    "options": [
      { "id": "A", "text": "Công bằng xã hội" },
      { "id": "B", "text": "Lợi nhuận của nhà đầu tư (tư bản)" },
      { "id": "C", "text": "Sự phát triển toàn diện của mọi người dân" },
      { "id": "D", "text": "Xóa đói giảm nghèo toàn cầu" }
    ],
    "correct": "B",
    "explanation": "Lợi ích của nhà đầu tư được đặt lên trên hết trong hệ thống TBCN."
  },
  {
    "id": 33,
    "question": "Tại Việt Nam, kinh tế nhà nước tập trung vào những lĩnh vực nào để giữ vai trò chủ đạo?",
    "options": [
      { "id": "A", "text": "Sản xuất hàng tiêu dùng xa xỉ" },
      { "id": "B", "text": "Các lĩnh vực then chốt như năng lượng, tài chính, quốc phòng" },
      { "id": "C", "text": "Dịch vụ ăn uống đường phố" },
      { "id": "D", "text": "Kinh doanh bất động sản nhỏ lẻ" }
    ],
    "correct": "B",
    "explanation": "Đây là những ngành 'xương sống' để Nhà nước điều tiết vĩ mô và đảm bảo an ninh."
  },
  {
    "id": 34,
    "question": "Quan niệm 'Mạnh được yếu thua' phổ biến trong mô hình kinh tế nào?",
    "options": [
      { "id": "A", "text": "Kinh tế kế hoạch hóa" },
      { "id": "B", "text": "Kinh tế thị trường tự do tư bản chủ nghĩa" },
      { "id": "C", "text": "Kinh tế thị trường định hướng XHCN" },
      { "id": "D", "text": "Kinh tế tự nhiên" }
    ],
    "correct": "B",
    "explanation": "Mô hình TBCN chấp nhận sự phân hóa giàu nghèo rất lớn như một hệ quả tất yếu của cạnh tranh tự do."
  },
  {
    "id": 35,
    "question": "Ví dụ về Chương trình 135 ở Việt Nam minh chứng cho điều gì?",
    "options": [
      { "id": "A", "text": "Sự ưu tiên cho kinh tế đô thị" },
      { "id": "B", "text": "Tính định hướng XHCN trong việc chăm lo cho vùng khó khăn" },
      { "id": "C", "text": "Việc Nhà nước muốn xóa bỏ kinh tế tư nhân" },
      { "id": "D", "text": "Sự thất bại của cơ chế thị trường" }
    ],
    "correct": "B",
    "explanation": "Nhà nước đầu tư hạ tầng ở vùng sâu, vùng xa – nơi doanh nghiệp tư nhân ít đầu tư – để đảm bảo công bằng."
  },
  {
    "id": 36,
    "question": "Tại sao Ngân hàng Chính sách xã hội cho hộ nghèo vay vốn là đặc trưng của định hướng XHCN?",
    "options": [
      { "id": "A", "text": "Vì nó giúp ngân hàng thu lãi cao nhất" },
      { "id": "B", "text": "Vì nó hỗ trợ người yếu thế phát triển sản xuất, thực hiện công bằng xã hội" },
      { "id": "C", "text": "Vì nó ngăn cản sự phát triển của ngân hàng tư nhân" },
      { "id": "D", "text": "Vì nó chỉ phục vụ cho người giàu" }
    ],
    "correct": "B",
    "explanation": "Đây là công cụ của Nhà nước nhằm mục tiêu xóa đói giảm nghèo, không đơn thuần vì lợi nhuận."
  },
  {
    "id": 37,
    "question": "Khía cạnh nào sau đây là minh chứng cho việc Việt Nam 'không hy sinh tiến bộ xã hội để chạy theo tăng trưởng kinh tế đơn thuần'?",
    "options": [
      { "id": "A", "text": "Chỉ số GDP tăng trưởng thần tốc bất chấp môi trường" },
      { "id": "B", "text": "Hệ thống an sinh xã hội và chính sách ưu đãi hộ nghèo" },
      { "id": "C", "text": "Cắt giảm toàn bộ chi phí giáo dục để đầu tư công nghiệp" },
      { "id": "D", "text": "Để mặc thị trường lao động tự điều tiết không cần pháp luật" }
    ],
    "correct": "B",
    "explanation": "Nhà nước luôn lồng ghép các chính sách xã hội vào trong các kế hoạch phát triển kinh tế."
  },
  {
    "id": 38,
    "question": "Đặc điểm 'Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người' thuộc về:",
    "options": [
      { "id": "A", "text": "Kinh tế thị trường sơ khai" },
      { "id": "B", "text": "Chủ nghĩa xã hội (giai đoạn đầu của CSCN)" },
      { "id": "C", "text": "Chế độ chiếm hữu nô lệ" },
      { "id": "D", "text": "Chủ nghĩa tư bản độc quyền" }
    ],
    "correct": "B",
    "explanation": "Đây là đặc trưng cao đẹp về mục tiêu giải phóng con người của CNXH."
  },
  {
    "id": 39,
    "question": "Sự khác biệt trong quản lý giữa KTTT TBCN và KTTT định hướng XHCN Việt Nam là:",
    "options": [
      { "id": "A", "text": "Nhà nước Việt Nam không cần pháp luật" },
      { "id": "B", "text": "Nhà nước Việt Nam quản lý để bảo vệ quyền lợi nhân dân lao động và giảm bất công" },
      { "id": "C", "text": "Nhà nước TBCN quản lý chặt chẽ hơn Việt Nam" },
      { "id": "D", "text": "Nhà nước Việt Nam chỉ quản lý kinh tế nhà nước" }
    ],
    "correct": "B",
    "explanation": "Bản chất Nhà nước Việt Nam là của nhân dân, do nhân dân và vì nhân dân nên mục tiêu quản lý khác biệt."
  },
  {
    "id": 40,
    "question": "Câu nói 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh' phản ánh:",
    "options": [
      { "id": "A", "text": "Chỉ tiêu về lợi nhuận của doanh nghiệp" },
      { "id": "B", "text": "Mục tiêu tổng quát của mô hình KTTT định hướng XHCN tại Việt Nam" },
      { "id": "C", "text": "Một khẩu hiệu không có giá trị thực tiễn" },
      { "id": "D", "text": "Đặc trưng duy nhất của kinh tế tư nhân" }
    ],
    "correct": "B",
    "explanation": "Đây là đích đến cuối cùng của quá trình xây dựng và phát triển đất nước theo định hướng XHCN."
  },
  {
    "id": 41,
    "question": "Các yếu tố sản xuất như lao động, vốn, hàng hóa trong kinh tế thị trường vận hành theo các quy luật nào?",
    "options": [
      { "id": "A", "text": "Quy luật giá trị, cung – cầu và cạnh tranh" },
      { "id": "B", "text": "Quy luật phân phối bình quân" },
      { "id": "C", "text": "Quy luật tập trung quyền lực" },
      { "id": "D", "text": "Quy luật bảo tồn vốn nhà nước" }
    ],
    "correct": "A",
    "explanation": "Đây là các quy luật kinh tế khách quan chi phối sự vận động của mọi yếu tố trong nền kinh tế thị trường để đạt được hiệu quả tối ưu."
  },
  {
    "id": 42,
    "question": "Đặc trưng 'sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người' phản ánh mục tiêu gì của CNXH?",
    "options": [
      { "id": "A", "text": "Ưu tiên phát triển kinh tế vùng sâu vùng xa" },
      { "id": "B", "text": "Giải phóng con người và tạo điều kiện phát triển toàn diện" },
      { "id": "C", "text": "Xây dựng quân đội mạnh để bảo vệ tổ quốc" },
      { "id": "D", "text": "Tập trung vào lợi ích của các tập đoàn lớn" }
    ],
    "correct": "B",
    "explanation": "CNXH hướng tới một xã hội nhân văn, nơi mỗi cá nhân đều có cơ hội phát triển tối đa tiềm năng của mình mà không bị áp bức."
  },
  {
    "id": 43,
    "question": "Tại sao trong kinh tế thị trường định hướng XHCN, Nhà nước lại nắm giữ các lĩnh vực then chốt như năng lượng, tài chính?",
    "options": [
      { "id": "A", "text": "Để độc quyền tăng giá thu lợi nhuận cho cán bộ" },
      { "id": "B", "text": "Để Nhà nước có công cụ điều tiết và đảm bảo an ninh kinh tế quốc gia" },
      { "id": "C", "text": "Để ngăn cản các doanh nghiệp tư nhân phát triển" },
      { "id": "D", "text": "Để hạn chế việc sử dụng hàng hóa nước ngoài" }
    ],
    "correct": "B",
    "explanation": "Việc kinh tế nhà nước giữ vai trò chủ đạo ở các lĩnh vực then chốt giúp Nhà nước định hướng và ổn định kinh tế vĩ mô theo mục tiêu xã hội."
  },
  {
    "id": 44,
    "question": "Phân phối theo mức đóng góp vốn và các nguồn lực khác trong nền kinh tế Việt Nam nhằm mục đích gì?",
    "options": [
      { "id": "A", "text": "Xóa bỏ hoàn toàn hình thức phân phối theo lao động" },
      { "id": "B", "text": "Tạo động lực huy động mọi nguồn lực xã hội cho đầu tư phát triển" },
      { "id": "C", "text": "Chỉ để làm giàu cho các nhà đầu tư nước ngoài" },
      { "id": "D", "text": "Hạn chế sự can thiệp của các hợp tác xã" }
    ],
    "correct": "B",
    "explanation": "Trong nền kinh tế đa thành phần, việc trả lợi tức theo vốn góp khuyến khích người dân và doanh nghiệp bỏ vốn ra kinh doanh, sản xuất."
  },
  {
    "id": 45,
    "question": "Theo nội dung bài viết, Nhà nước Việt Nam can thiệp vào nền kinh tế thị trường nhằm mục đích gì?",
    "options": [
      { "id": "A", "text": "Thay thế hoàn toàn vai trò của các quy luật thị trường" },
      { "id": "B", "text": "Khắc phục những 'khuyết tật' của thị trường và định hướng phát triển xã hội" },
      { "id": "C", "text": "Ép buộc các doanh nghiệp tư nhân phải phá sản" },
      { "id": "D", "text": "Chỉ để bảo vệ lợi ích của giới chủ tư sản" }
    ],
    "correct": "B",
    "explanation": "Thị trường có những khiếm khuyết (như ô nhiễm, bất bình đẳng), Nhà nước cần can thiệp để đảm bảo sự phát triển bền vững và công bằng."
  },
  {
    "id": 46,
    "question": "Hội nhập quốc tế trong nền kinh tế thị trường được xem là:",
    "options": [
      { "id": "A", "text": "Một rào cản cho sự phát triển của doanh nghiệp nội địa" },
      { "id": "B", "text": "Xu thế tất yếu để mở rộng thị trường và khai thác nguồn lực bên ngoài" },
      { "id": "C", "text": "Chỉ là hoạt động mang tính hình thức, ngoại giao" },
      { "id": "D", "text": "Cách để các nước giàu thôn tính các nước nghèo" }
    ],
    "correct": "B",
    "explanation": "Trong bối cảnh toàn cầu hóa, không quốc gia nào có thể phát triển mạnh mẽ nếu tách rời khỏi dòng chảy kinh tế thế giới."
  },
  {
    "id": 47,
    "question": "Đặc trưng 'Văn hóa là nền tảng tinh thần và động lực cho sự phát triển xã hội' trong CNXH có nghĩa là:",
    "options": [
      { "id": "A", "text": "Chỉ cần phát triển kinh tế, văn hóa sẽ tự phát triển theo" },
      { "id": "B", "text": "Phát triển văn hóa giúp bồi đắp giá trị con người, từ đó thúc đẩy kinh tế bền vững" },
      { "id": "C", "text": "Phải xóa bỏ tất cả các giá trị văn hóa cũ để xây dựng văn hóa mới" },
      { "id": "D", "text": "Văn hóa chỉ là công cụ để giải trí sau giờ lao động" }
    ],
    "correct": "B",
    "explanation": "Văn hóa cung cấp sức mạnh tinh thần và định hướng giá trị nhân văn cho mọi hoạt động kinh tế - xã hội."
  },
  {
    "id": 48,
    "question": "Sự khác biệt lớn nhất về vai trò Nhà nước giữa KTTT tư bản chủ nghĩa và định hướng XHCN là gì?",
    "options": [
      { "id": "A", "text": "Nhà nước tư bản chủ nghĩa không bao giờ thu thuế" },
      { "id": "B", "text": "Nhà nước định hướng XHCN quản lý để bảo vệ quyền lợi của đại đa số nhân dân lao động" },
      { "id": "C", "text": "Nhà nước tư bản chủ nghĩa không có quân đội và công an" },
      { "id": "D", "text": "Nhà nước định hướng XHCN không sử dụng các công cụ kinh tế vĩ mô" }
    ],
    "correct": "B",
    "explanation": "Nhà nước XHCN mang bản chất giai cấp công nhân, luôn đặt lợi ích của nhân dân lên hàng đầu thay vì chỉ bảo vệ giới chủ."
  },
  {
    "id": 49,
    "question": "Hình thức 'Phân phối thông qua hệ thống an sinh xã hội, phúc lợi xã hội' ở Việt Nam hướng tới:",
    "options": [
      { "id": "A", "text": "Những người có đóng góp vốn lớn nhất" },
      { "id": "B", "text": "Các đối tượng chính sách, người nghèo và người yếu thế trong xã hội" },
      { "id": "C", "text": "Chỉ dành cho các doanh nghiệp có vốn đầu tư nước ngoài" },
      { "id": "D", "text": "Những người lao động có năng suất cao nhất" }
    ],
    "correct": "B",
    "explanation": "Đây là cách thức Nhà nước thực hiện công bằng xã hội, đảm bảo không ai bị bỏ lại phía sau trong quá trình phát triển."
  },
  {
    "id": 50,
    "question": "Tại sao nói nền kinh tế thị trường định hướng XHCN ở Việt Nam có tính 'kiến tạo'?",
    "options": [
      { "id": "A", "text": "Vì Nhà nước xây dựng môi trường pháp lý thuận lợi cho các thành phần kinh tế phát triển" },
      { "id": "B", "text": "Vì Nhà nước trực tiếp làm mọi việc thay cho các doanh nghiệp" },
      { "id": "C", "text": "Vì Nhà nước chỉ tập trung vào ngành xây dựng và kiến trúc" },
      { "id": "D", "text": "Vì Nhà nước cấm các quy luật thị trường hoạt động" }
    ],
    "correct": "A",
    "explanation": "Vai trò 'kiến tạo' nghĩa là Nhà nước tạo ra khung khổ, chính sách và cơ sở hạ tầng để kích thích sự sáng tạo và đầu tư của toàn xã hội."
  }
]

const QuizPage = () => {
  // ===== STATE =====
  const [quizQuestions, setQuizQuestions] = useState([]); // Danh sách 10 câu ngẫu nhiên
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // ===== HÀM CHỌN NGẪU NHIÊN 10 CÂU =====
  const getRandomQuestions = () => {
    // Trộn mảng gốc
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
    // Lấy 10 câu đầu tiên
    return shuffled.slice(0, 10);
  };

  // Khởi tạo 10 câu hỏi khi lần đầu load trang
  useEffect(() => {
    setQuizQuestions(getRandomQuestions());
  }, []);

  // Lấy dữ liệu của câu hỏi hiện tại từ mảng 10 câu đã chọn
  const current = quizQuestions[currentQuestion];

  // ===== HANDLERS =====
  const handleSelect = (id) => {
    // Nếu đã hiện giải thích rồi (đã chọn rồi) thì không cho chọn lại
    if (showExplanation) return;

    setSelectedOption(id);
    setShowExplanation(true); // HIỆN GIẢI THÍCH NGAY LẬP TỨC

    // CHẤM ĐIỂM NGAY LẬP TỨC
    if (id === current.correct) {
      setScore((prev) => prev + 10);
    }
  };

const handleNext = () => {
    // Vì giải thích đã hiện lúc chọn rồi, nên ở đây chỉ việc chuyển câu
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizQuestions(getRandomQuestions()); // Chọn 10 câu mới hoàn toàn khi làm lại
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  // Nếu chưa kịp load câu hỏi (tránh lỗi undefined)
  if (quizQuestions.length === 0) return <div>Đang tải câu hỏi...</div>;

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="quiz-page">
      <header className="quiz-header">
        <h1>
          <span className="highlight">Quiz</span> Kiểm tra
        </h1>
        <p>Kiểm tra kiến thức về tư tưởng Hồ Chí Minh</p>
      </header>

      {!isFinished ? (
  <div className="quiz-container">
    {/* ĐOẠN NÀY HIỂN THỊ SỐ CÂU VÀ ĐIỂM SỐ */}
    <div className="quiz-stats">
      <span>Câu {currentQuestion + 1} / {quizQuestions.length}</span>
      <span>Điểm: {score}</span>
    </div>
          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="question-card">
            <h2 className="question-text">{current.question}</h2>

            <div className="options-list">
              {current.options.map((opt) => {
                const isCorrect = showExplanation && opt.id === current.correct;
                const isWrong =
                  showExplanation &&
                  opt.id === selectedOption &&
                  opt.id !== current.correct;

                return (
                  <button
                    key={opt.id}
                    className={`option-item
                      ${selectedOption === opt.id ? "active" : ""}
                      ${isCorrect ? "correct" : ""}
                      ${isWrong ? "wrong" : ""}
                    `}
                    onClick={() => handleSelect(opt.id)}
                    disabled={showExplanation} // Khóa chọn lại sau khi đã chọn
                  >
                    <span className="option-letter">{opt.id}</span>
                    <span className="option-text">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Giải thích hiện ra ngay khi showExplanation là true */}
            {showExplanation && (
              <div className="explanation-box fade-in">
                <div className="status-label">
                  {selectedOption === current.correct ? (
                    <span className="text-correct">Chính xác!</span>
                  ) : (
                    <span className="text-wrong">Chưa đúng!</span>
                  )}
                </div>
                <strong>Giải thích:</strong>
                <p>{current.explanation}</p>
              </div>
            )}

            {/* Nút này chỉ bấm được sau khi đã chọn đáp án */}
            <button
              className="next-btn"
              disabled={!showExplanation} // Chỉ hiện/bấm được khi đã hiện giải thích
              onClick={handleNext}
            >
              {currentQuestion + 1 === quizQuestions.length
                ? "Hoàn thành"
                : "Câu tiếp theo"}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="result-card">
          <Award size={60} className="result-icon" />
          <h2 className="result-content">Hoàn thành bài kiểm tra!</h2>
          <p className="final-score">
            Số điểm của bạn: <span>{score}</span> / 100
          </p>
          <button className="reset-btn" onClick={resetQuiz}>
            <RotateCcw size={18} /> Làm lại
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
