import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/context/AuthProvider.js";

const AppInit = () => {
  const context = useContext(AuthContext);

  return (
    <>{context.isLogin ? <Navigate to="/home" /> : <Navigate to="/login" />}</>
  );
};

export default AppInit;
