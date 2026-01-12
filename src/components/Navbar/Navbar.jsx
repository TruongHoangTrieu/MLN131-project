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
            <span className="brand-year">1954 - 1965</span>
            <span className="brand-sub">ĐẢNG LÃNH ĐẠO</span>
          </div>
        </div>

        <ul className="nav-menu">
          <li><a href="#trang-chu">TRANG CHỦ</a></li>
          <li><a href="#kien-thuc">KIẾN THỨC</a></li>
          <li><a href="#dong-thoi-gian">DÒNG THỜI GIAN</a></li>
          <li><a href="#chi-vien">CHI VIỆN</a></li>
          <li><a href="#hai-mien">HAI MIỀN</a></li>
          <li><a href="#lanh-dao">LÃNH ĐẠO</a></li>
          <li><a href="#ban-do">BẢN ĐỒ</a></li>
          <li><a href="#trac-nghiem">TRẮC NGHIỆM</a></li>
        </ul>
      </div>
      <div className="nav-underline"></div>
    </nav>
  );
};

export default Navbar;