import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./store/context/AuthProvider.js";
import { useContext, useEffect } from "react";

function App() {
  const context = useContext(AuthContext);
  const token = JSON.parse(localStorage.getItem("user_data_bookstore"));
  useEffect(() => {
    if (token) {
      context.setToken(token.token);
      context.setIsLogin(true);
    }
  }, []);
  return (
    <BrowserRouter basename="bookstore">
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
