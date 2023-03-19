import { AppRouter } from "../../src/router/AppRouter";
import { render, screen } from "@testing-library/react";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../src/hooks/useAuthStore");
jest.mock("../../src/calendar", () => ({
  CalendarPage: () => <h1>CalendarPage</h1>,
}));

describe("Pruebas en AppRouter", () => {
  const mockCheckAuthToken = jest.fn();
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

  test("should mostrarla el login en caso de no estar autenticado", () => {
    useAuthStore.mockReturnValue({
      status: "not-authenticated",
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter initialEntries={["/testAlgo"]}>
        <AppRouter />
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByText("Ingreso")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test("should mostrarla el calendario si está autenticado", () => {
    useAuthStore.mockReturnValue({
      status: "authenticated",
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getByText("CalendarPage")).toBeTruthy();
  });
});
