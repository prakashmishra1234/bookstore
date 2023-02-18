import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../store/context/AuthProvider.js";

const ProtectedRoute = (props) => {
  const Auth = React.useContext(AuthContext);

  if (Auth.isLogin) {
    return props.children;
  }
  return <Navigate to={"/login"} replace={true} />;
};

export default ProtectedRoute;
