import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import DashboardRoutes from "../../routers/DashboardRoutes";

describe("pruebas DashboardRoutes", () => {
  const contextValue = {
    user: {
      logged: true,
      name: "Dani",
    },
  };

  test("should mostrarse correctamente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Dani");
  });
});
