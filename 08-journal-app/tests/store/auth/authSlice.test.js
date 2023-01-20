import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
} from "../../fixtures/authFixtures";

describe("Prueba en el authSlice", () => {
  test('debe llamarse el estado iniciarl y llamarse "auth', () => {
    expect(authSlice.name).toBe("auth");
    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("should realizar la autenticación", () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: "authenticated", //'checking','not-authenticated', 'authenticated
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("should realizar el logout sin argumentos", () => {
    const logoutState = authSlice.reducer(initialState, logout());
    expect(logoutState).toEqual({
      status: "not-authenticated", //'checking','not-authenticated', 'authenticated
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: null,
    });
  });
  test("should realizar el logout con argumentos (mensaje de errror)", () => {
    const errorMessage = "error de prueba";
    const logoutState = authSlice.reducer(initialState, logout(errorMessage));
    expect(logoutState).toEqual({
      status: "not-authenticated", //'checking','not-authenticated', 'authenticated
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });

  test("should cambiar el estado a checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe("checking");
  });
});
