import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Root = () => {
  const { isLogin } = useAuth();

  if (!isLogin) return <Navigate to="/auth/signin" replace />;

  return <Navigate to="/todo" replace />;
};

export default Root;
