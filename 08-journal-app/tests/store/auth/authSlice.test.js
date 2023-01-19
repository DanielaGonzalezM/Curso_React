import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe("Prueba en el authSlice", () => {
  test('debe llamarse el estado iniciarl y llamarse "auth', () => {
    expect(authSlice.name).toBe("auth");
    const state = authSlice.reducer(initialState,{});
    expect(state).toEqual(initialState);
  });
});
