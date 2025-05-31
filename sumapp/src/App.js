import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import SummaryApp from './SummaryApp';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SummaryApp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
