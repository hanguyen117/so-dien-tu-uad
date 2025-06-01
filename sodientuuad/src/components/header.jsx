import React from "react";
import logoImage from "../assets/logo_image.jpg";
import { Bell, User } from "lucide-react";
import "./header.css"; 

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo-area">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <span className="logo-text">
          Sổ điện tử <br /> Sinh viên
        </span>
      </div>

      <div className="header-title-area">
        <h1 className="header-title">
          TRƯỜNG ĐẠI HỌC MỸ THUẬT CÔNG NGHIỆP
        </h1>
        <div className="header-icons">
          <Bell className="icon" />
          <User className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;