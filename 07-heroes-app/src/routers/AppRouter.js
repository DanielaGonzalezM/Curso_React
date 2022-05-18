import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "../components/login/LoginScreen";

import DashboardRoutes from "./DashboardRoutes";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/*"
            element={
              <PrivateRouter>
                <DashboardRoutes />
              </PrivateRouter>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
