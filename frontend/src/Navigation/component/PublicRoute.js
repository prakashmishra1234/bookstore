import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../store/context/AuthProvider.js";

function PublicRoute(props) {
  const Auth = useContext(AuthContext);

  if (!Auth.isLogin) {
    return props.children;
  }
  return <Navigate to={"/home"} replace={true} />;
}

export default PublicRoute;
