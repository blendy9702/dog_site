import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import MainPage from "./assets/pages/MainPage";
import LoginPage from "./assets/pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
