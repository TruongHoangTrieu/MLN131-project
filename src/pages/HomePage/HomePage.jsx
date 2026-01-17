import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import KnowledgeSection from "../../components/Knowledge/KnowledgeSection";
import HistoryTimeline from "../../components/HistoryTimeline/HistoryTimeline";
import ComparisonLayout from "../../components/ComparisonLayout/ComparisonLayout";
import GuidelineSection from "../../components/GuidelineSection/GuidelineSection";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* HERO: KHÔNG bọc section */}
      <HeroSection id="trang-chu" />

      <section id="kien-thuc">
        <KnowledgeSection />
      </section>

      <section id="dong-thoi-gian">
        <HistoryTimeline />
      </section>

      <section id="so-sanh">
        <ComparisonLayout />
      </section>

      <section id="huong-dan">
        <GuidelineSection />
      </section>
    </div>
  );
};

export default HomePage;
