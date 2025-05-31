import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nMật khẩu: ${password}`);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2 className="login-title">ĐĂNG NHẬP</h2>

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

        <button type="submit" className="login-button">Đăng nhập</button>

        <div className="login-links">
          <a href="#">Quên mật khẩu</a>
          <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
            Chưa có tài khoản?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
