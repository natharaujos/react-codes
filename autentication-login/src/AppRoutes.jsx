import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./contexts/auth";
import React from "react";
import { AuthProvider } from "./contexts/auth";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
