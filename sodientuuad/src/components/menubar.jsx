import React from "react";
import userAvt from "../assets/anh-dai-dien.png";
import "./menubar.css";
import { Calendar, User , LayoutDashboard , FileBarChart, Bell , CalendarCheck , Laptop} from "lucide-react";

function MenuBar(/*{ student_database }*/) { //Thay tên db
  return (
    <div className="container">
      <div className="user-id-card">
        {/* Phần này để demo */}
        <img src={userAvt} alt="User Avatar" className="user-image" />
        <h2 className="user-name">Đặng Minh Anh</h2>
        <h3 className="user-id">MSV <span className="fetch-user-id">A37708</span></h3>
        <h3 className="user-major">Ngành <span className="fetch-user-major">Công nghệ thông tin</span></h3>
        {/* Phần này dùng API khi có db */}
        {/* 
        <img
          src={student.avatar || userAvt}  // fallback nếu không có ảnh
          alt="User Avatar"
          className="user-image"
        />
        <h2 className="user-name">{student.name}</h2>
        <h3 className="user-id">MSV <span className="fetch-user-id">{student.id}</span></h3>
        <h3 className="user-major">Ngành <span className="fetch-user-major">{student.major}</span></h3>
         */}
      </div>

      <div className="menu-bar">
        <div className="dashboard active">
          <LayoutDashboard className="icon" />
          <span>Dashboard</span>
        </div>

        <div className="user-infor-panel">
          <User className="icon" />
          <span>Thông tin sinh viên</span>
        </div>

        <div className="schedule">
          <Calendar className="icon" />
          <span>Thời khóa biểu</span>
        </div>

        <div className="user-transcript">
          <FileBarChart className="icon" />
          <span>Kết quả học tập</span>
        </div>

        <div className="notification">
          <Bell className="icon" />
          <span>Thông báo</span>
        </div>

        <div className="exam-schedule">
          <CalendarCheck className="icon" />
          <span>Lịch thi</span>
        </div>

        <h2 className="label">Workplace của bạn</h2>
        <div className="user-planning">
          <Laptop className="icon" />
          <span>Kế hoạch</span>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
