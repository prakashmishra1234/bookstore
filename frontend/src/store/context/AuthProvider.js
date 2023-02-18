import React, { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = (props) => {
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ token, isLogin, setToken, setIsLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
