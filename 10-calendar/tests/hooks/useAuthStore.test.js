import { configureStore } from "@reduxjs/toolkit";
import { useAuthStore } from "../../src/hooks";
import { authSlice } from "../../src/store";
import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { initialState } from "../fixtures/authStates";
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
    console.log(result);
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
});
