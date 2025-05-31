import React, { useState } from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    alert(`Email: ${email}\nMật khẩu: ${password}`);
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleRegister}>
        <h2 className="register-title">ĐĂNG KÝ</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Xác nhận mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="register-button">Đăng ký</button>

        <div className="register-links">
          <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                      Đã có tài khoản
            </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
