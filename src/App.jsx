import React, { useState } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import KnowledgeSection from "./components/Knowledge/KnowledgeSection";
import HistoryTimeline from "./components/HistoryTimeline/HistoryTimeline";
import GuidelineSection from "./components/GuidelineSection/GuidelineSection";
import FooterSection from "./components/FooterSection/FooterSection";
import ComparisonLayout from "./components/ComparisonLayout/ComparisonLayout";

function App() {
  // Trạng thái để kiểm soát việc hiển thị Loading hay Nội dung chính
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        // Khi đang loading, chỉ hiện trang Loading
        // Khi progress đạt 100%, hàm onFinished sẽ được gọi để ẩn Loading
        <LoadingPage onFinished={() => setIsLoading(false)} />
      ) : (
        // Khi loading xong, hiện toàn bộ giao diện trang chủ
        <>
          <Navbar />
          <main>
            <HeroSection />
            <KnowledgeSection />
            <HistoryTimeline />
            <ComparisonLayout />
            <GuidelineSection />
            <FooterSection />
            {/* Bạn có thể thêm các Section khác ở đây */}
            {/* <section style={{ height: "100vh", background: "#0a0a0a" }}> */}
               {/* Nội dung tiếp theo của trang web */}
            {/* </section> */}
          </main>
        </>
      )}
    </div>
  );
}

export default App;