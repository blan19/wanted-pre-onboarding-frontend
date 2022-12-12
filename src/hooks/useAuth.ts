import { useCallback, useState } from "react";
import { getToken, resetToken } from "../utils/token";

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(getToken() ? true : false);

  const logout = useCallback(() => {
    resetToken();
    setIsLogin(false);
  }, []);

  return { isLogin, logout };
}
