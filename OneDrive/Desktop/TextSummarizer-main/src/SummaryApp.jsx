import React, { useState } from 'react';
import './App.css';
import UserDropdown from "./components/Log";
import UploadFile from './components/File_upload';
// import { Link } from 'react-router-dom';
const SummaryApp = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    const sentences = inputText.split('.');
    const summarized = sentences.slice(0, 2).join('.') + (sentences.length > 2 ? '...' : '');
    setSummary(summarized.trim());
  };

  return (
    <div className="app-container">
      <header className="header">
        {/* <span className="header-title">Trang chủ (chưa đăng nhập)</span> */}
        {/* <div className="user-icon">👤</div> */}
        <div className="flex justify-end p-4">
          <UserDropdown />
        </div>
      </header>

      <div className="content">
        <div className="text-area-container relative w-full">
          <textarea
            className="input-text pr-40"
            placeholder="Nhập hoặc dán văn bản và nhấn “Tóm tắt”"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <div className="absolute top-4 right-4">
            <UploadFile setInputText={setInputText} />
          </div>

          <div className="output-container mt-4">
            <div className="summary-output">{summary}</div>
            <div className="word-count">{inputText.trim() === '' ? '0' : inputText.trim().split(/\s+/).length} từ</div>
          </div>
        </div>
        

        <button className="summarize-button" onClick={handleSummarize}>Tóm tắt</button>
      </div>
    </div>
  );
};

export default SummaryApp;