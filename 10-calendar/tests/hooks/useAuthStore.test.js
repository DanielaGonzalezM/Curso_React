import { configureStore } from "@reduxjs/toolkit";
import { useAuthStore } from "../../src/hooks";
import { authSlice } from "../../src/store";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { initialState, notAuthenticatedState } from "../fixtures/authStates";
import { testUserCredentials } from "../fixtures/testUser";
const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: { auth: { ...initialState } },
  });
};

describe("Pruebas en useAuthStore", () => {
  test("should regresar los valores por defecto", () => {
    const mockStore = getMockStore({ ...initialState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    expect(result.current).toEqual({
      errorMessage: undefined,
      status: "checking",
      user: {},
      checkAuthToken: expect.any(Function),
      startLogin: expect.any(Function),
      startLogout: expect.any(Function),
      startRegister: expect.any(Function),
    });
  });

  test("should realizar el login correctamente", async () => {
    localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    await act(async () => {
      await result.current.startLogin({ ...testUserCredentials });
    });
    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: "authenticated",
      user: { name: "Tester", uid: "6408a7a16ccedcb13eba1973" },
    });
    expect(localStorage.getItem("token")).toEqual(expect.any(String));
    expect(localStorage.getItem("token-init-date")).toEqual(expect.any(String));
  });
});
