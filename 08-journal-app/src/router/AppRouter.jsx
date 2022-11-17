import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { useCheckAuth } from "../hooks";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

import { CheckingAuth } from "../ui/components";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="auth/login" />} />
      {/* // Login y registro
      <Route path="/auth/*" element={<AuthRoutes />} />

      //JournalApp 
      <Route path="*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
