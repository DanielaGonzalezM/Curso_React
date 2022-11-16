import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/components";

export const AppRouter = () => {
  const {status} = useSelector(state=>state.auth);
  if(status === "checking"){
    return <CheckingAuth />
  }
  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/*JournalApp */}
      <Route path="*" element={<JournalRoutes />} />
    </Routes>
  );
};
