import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>로그인 페이지</h1>
      <Button
        label="submit"
        variant="primary"
        onClick={() => {
          navigate("/main");
        }}
      >
        이거 버튼임?
      </Button>
    </div>
  );
};

export default LoginPage;
