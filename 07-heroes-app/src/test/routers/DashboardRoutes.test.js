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

  test("should mostrarse correctamente - Marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Dani");
    expect(wrapper.find("h1").text().trim()).toBe("MarvelScreen");
  });

  test("should mostrarse correctamente - dc", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/dc"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("DcScreen");
  });
});
