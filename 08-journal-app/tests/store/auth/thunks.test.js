import { singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {
  checkingAuthentication,
  startGoogleSingIn,
} from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Pruebas en AuthThunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("should invocar el checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("should startGoogleSingIn debe llamar checkingcredentials y login exitoso", async () => {
    const loginData = { ok: true, ...demoUser };
    await singInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSingIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("should startGoogleSingIn debe llamar checkingcredentials y logout error", async () => {
    const loginData = { ok: false, errorMessage: "Un error en Google" };
    await singInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSingIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
