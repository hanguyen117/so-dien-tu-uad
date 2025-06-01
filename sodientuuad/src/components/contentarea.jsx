import React, { useState } from "react";
import "./contentarea.css";

function ContentArea() {
  const [activeTab, setActiveTab] = useState("completed");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content-box">
      <h2 className="greeting">
        Xin chào <span className="fetch-data">Đặng Minh Anh!</span>
      </h2>

      <div className="recent-tasks">
        <h3>Các nhiệm vụ gần đây</h3>
        <div className="task-boxes">
          <div
            className={`drop-down tab-box ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => handleTabClick("completed")}
          >
            Đã hoàn thành
          </div>
          <div
            className={`drop-down tab-box ${activeTab === "incompleted" ? "active" : ""}`}
            onClick={() => handleTabClick("incompleted")}
          >
            Chưa hoàn thành
          </div>
          <div
            className={`drop-down tab-box ${activeTab === "outdated" ? "active" : ""}`}
            onClick={() => handleTabClick("outdated")}
          >
            Đã quá hạn
          </div>
        </div>

        <div className="dropdown-choosen-taskbox">
          {/* Nội dung task thay đổi theo tab đang chọn */}
          <p>Bạn đang xem các nhiệm vụ: <strong>{activeTab}</strong></p>
        </div>
      </div>

      <div className="recent-notifications">
        <div>
          <h3>Thông báo</h3>
          <span className="days-filter drop-down">5 ngày trước</span>
        </div>
        <div className="notify-table">
          <table className="notify-table">
            <thead>
              <tr>
                <th>Mã môn</th>
                <th>Môn</th>
                <th>Giảng viên</th>
                <th>Thông báo</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {/* Tạm thời chưa có dữ liệu */}
              <tr>
                <td>CS02</td>
                <td>Hình học 2</td>
                <td>Đỗ Xuân Nam</td>
                <td>Nghỉ học 30/4...</td>
                <td>29/04/2025 15:23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
