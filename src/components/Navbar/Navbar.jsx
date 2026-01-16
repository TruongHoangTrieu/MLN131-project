import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Nếu cuộn xuống quá 50px thì đổi trạng thái
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    /* Thêm class 'scrolled' dựa trên trạng thái isScrolled */
    <nav className={`history-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <div className="logo-vn-circle">
            <span className="vn-text">VN</span>
          </div>
          <div className="brand-titles">
            <span className="brand-year">KINH TẾ CHÍNH TRỊ</span>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#trang-chu">TTrang Chủ</a>
          </li> 
          <li>
            <a href="#kien-thuc">Lý Thuyết</a>
          </li>
          <li>
            <a href="#dong-thoi-gian">Ví Dụ Thực Tiễn</a>
          </li>
          <li>
            <a href="#dong-thoi-gian">So Sánh</a>
          </li>
        </ul>
      </div>
      <div className="nav-underline"></div>
    </nav>
  );
};

export default Navbar;
