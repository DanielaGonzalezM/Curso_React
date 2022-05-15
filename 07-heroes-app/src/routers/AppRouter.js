import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginScreen from "../components/login/LoginScreen";

import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <div>
      <Router>
          <Routes>

            <Route path="/login" element={<LoginScreen />} />
            <Route path="/*" element={<DashboardRoutes />} />
          </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
