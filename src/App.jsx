import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import RegisterForm from "./components/RegisterForm";

// Protect Route Component
const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginForm />}
      />
         <Route
        path="/register"
        element={<RegisterForm />}
      />
      <Route
      
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={<Navigate to="/dashboard" />}
      />
    </Routes>
  );
};

export default App;
