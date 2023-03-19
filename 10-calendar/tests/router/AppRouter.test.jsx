import { AppRouter } from "../../src/router/AppRouter";
import { fireEvent, render, screen } from "@testing-library/react";
import { useAuthStore } from "../../src/hooks/useAuthStore";

jest.mock("../../src/hooks/useAuthStore");

describe("Pruebas en AppRouter", () => {
  const mockCheckAuthToken = jest.fn();
  beforeEach(() => localStorage.clear());
  beforeEach(() => jest.clearAllMocks());
  test("should mostrarla pantalla de carga y llamar checkAuthToken", () => {
    useAuthStore.mockReturnValue({
      status: "checking",
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);
    // screen.debug();
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });
});
