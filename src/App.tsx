// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
// 기타 필요한 컴포넌트 임포트

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {/* 라우트 설정 */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />  {/* Login 컴포넌트 사용 */}
        {/* 다른 페이지 라우트 설정 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
