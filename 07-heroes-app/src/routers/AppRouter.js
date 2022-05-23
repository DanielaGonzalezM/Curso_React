import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "../components/login/LoginScreen";

import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" 
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
            />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
