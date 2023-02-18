import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../component/Login";
import Home from "../component/Home";
import PublicRoute from "./component/PublicRoute";
import ProtectedRoute from "./component/ProtectedRoute";
const Navigation = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default Navigation;
