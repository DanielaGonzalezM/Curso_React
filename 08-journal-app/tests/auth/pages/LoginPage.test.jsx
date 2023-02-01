import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSingIn = jest.fn();
const mockStartLogingWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSingIn: () => mockStartGoogleSingIn,
  startLogingWithEmailPassword: ({ email, password }) => {
    return () => mockStartLogingWithEmailPassword({ email, password });
  },
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => (fn) => fn(), // funcion que retorna el llamado de  la función?
}));
const store = configureStore({
  reducer: { auth: authSlice.reducer },
  preloadedState: { auth: notAuthenticatedState },
});
describe("Pruebas LoginPage", () => {
  beforeEach(() => jest.clearAllMocks());
  test("should mostrar componente correctamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("should google debe llamar al startGoogleSingIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSingIn).toHaveBeenCalled();
  });

  test("should llamar startLoginwithEmailPassword", () => {
    const email = "prueba@gmail.com";
    const password = "123456";
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole("textbox", { name: "Correo" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });

    const passwordField = screen.getByTestId("password");
    fireEvent.change(passwordField, {
      target: { password: "password", value: password },
    });

    const formField = screen.getByLabelText("submit-form");
    fireEvent.submit(formField);
    expect(mockStartLogingWithEmailPassword).toHaveBeenCalledWith({
      email: email,
      password: password,
    });
  });
});
