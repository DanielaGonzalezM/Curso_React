import { Navbar } from "../../../components/ui/Navbar";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pruebas en Navbar", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Pedro",
      logged: true,
    },
  };
  const wraper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should mostrar correctamente", () => {
    expect(wraper).toMatchSnapshot();
    expect(wraper.find(".text-info").text().trim()).toBe("Pedro");
  });

  test("should llamar el logout, llamar el navigate y el dispatch con los argumentos", () => {
    wraper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
