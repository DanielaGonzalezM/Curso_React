import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
export const useAuthStore = () => {
  const { state, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log(email, password);
    try {
      const resp = await calendarApi.post("/auth", { email, password });
      console.log({ resp });
    } catch (error) {
      console.log({ error });
    }
  };
  return {
    //*Propiedades
    state,
    user,
    errorMessage,
    //*Métodos
    startLogin,
  };
};
