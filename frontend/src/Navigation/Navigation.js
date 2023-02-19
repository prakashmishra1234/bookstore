import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "../component/Login";
import Home from "../component/Home";
import PublicRoute from "./component/PublicRoute";
import ProtectedRoute from "./component/ProtectedRoute";
import Signup from "../component/Signup";
import AppInit from "../component/AppInit.js";
import MainLayout from "../component/MainLayout";
import Account from "../component/Account";
import Cart from "../component/Cart";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<AppInit />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default Navigation;
