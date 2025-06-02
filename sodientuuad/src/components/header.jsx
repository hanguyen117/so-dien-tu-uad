import React, { useState } from "react";
import logoImage from "../assets/logo_image.jpg";
import { Bell, User } from "lucide-react";
import "./header.css"; 

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
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

          {/* Phần này là demo, xóa khi có db */}
          <div className="user-dropdown">
            <User className="icon" onClick={toggleDropdown} />
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <strong>A37708 - ĐẶNG MINH ANH</strong>
                </div>
                <div className="dropdown-item">Hồ sơ của tôi</div>
                <div className="dropdown-item txtcolor-red">Đăng xuất</div>
              </div>
            )}
          </div>

            {/* Dưới đây là dùng API khi có db */}
          {/* <div className="user-dropdown">
            <User className="icon" onClick={toggleDropdown} />
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <strong>{studentId}</strong> - {fullName}
                </div>
                <div className="dropdown-item">Hồ sơ của tôi</div>
                <div className="dropdown-item">Đăng xuất</div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;