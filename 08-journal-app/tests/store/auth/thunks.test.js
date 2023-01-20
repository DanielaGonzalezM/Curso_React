import { checkingCredentials } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";

jest.mock("../../../src/firebase/providers");

describe("Pruebas en AuthThunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("should invocar el checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
