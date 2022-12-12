import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, resetToken } from "../utils/token";

export default function useAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(getToken() ? true : false);

  const logout = useCallback(() => {
    resetToken();
    setIsLogin(false);
    navigate("/auth/signin", { replace: true });
  }, []);

  useEffect(() => {
    if (!isLogin) navigate("/auth/signin", { replace: true });
  }, [isLogin]);

  return { isLogin, logout };
}
