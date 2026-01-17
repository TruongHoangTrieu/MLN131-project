import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import HomePage from "./pages/HomePage/HomePage";

import Navbar from "./components/Navbar/Navbar";
import FooterSection from "./components/FooterSection/FooterSection";
import QuizPage from "./pages/QuizPage/QuizPage";



function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingPage onFinished={() => setIsLoading(false)} />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </main>

      <FooterSection />
    </>
  );
}

export default App;
