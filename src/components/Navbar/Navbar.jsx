import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll đến section (chỉ dùng cho trang "/")
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      // Nếu đang ở trang khác → quay về trang chủ trước
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`history-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-brand" onClick={() => navigate("/")}>
          <div className="logo-vn-circle">
            <span className="vn-text">VN</span>
          </div>
          <div className="brand-titles">
            <span className="brand-year">KINH TẾ CHÍNH TRỊ</span>
          </div>
        </div>

        {/* Menu */}
        <ul className="nav-menu">
          <li onClick={() => handleScrollTo("trang-chu")}>Trang Chủ</li>
          <li onClick={() => handleScrollTo("kien-thuc")}>Lý Thuyết</li>
          <li onClick={() => handleScrollTo("dong-thoi-gian")}>
            Ví Dụ Thực Tiễn
          </li>
          <li onClick={() => handleScrollTo("so-sanh")}>So Sánh</li>

          {/* Trang Quiz */}
          <li>
            <Link to="/quiz" className="quiz-link">
              Quiz
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-underline"></div>
    </nav>
  );
};

export default Navbar;
