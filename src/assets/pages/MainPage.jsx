import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>메인페이지</h1>
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        넌 그냥 돌아가라
      </button>
    </div>
  );
};

export default MainPage;
