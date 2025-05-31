import React from 'react';
import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist';
// import { getDocument } from 'pdfjs-dist';
import './File_upload.css';

// DÙNG CDN làm worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function File_upload({ setInputText }) {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const extension = file.name.split('.').pop().toLowerCase();

    if (extension === 'txt') {
      const reader = new FileReader();
      reader.onload = (e) => setInputText(e.target.result);
      reader.readAsText(file);
    } else if (extension === 'docx') {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const result = await mammoth.extractRawText({ arrayBuffer });
        setInputText(result.value);
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Chỉ hỗ trợ các định dạng: .txt, .docx");
    }
  };

  return (
    <div className="uploadBox">
      <label className="uploadLabel">
        <input
          type="file"
          accept=".txt,.docx"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div className="uploadContent">
          <span role="img" aria-label="file">📄</span>
          <span className="uploadText">up file</span>
        </div>
      </label>
    </div>
  );
}

export default File_upload;