import AppRouter from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";

describe("pruebas AppRouter", () => {
  test("should de mostrar el login si no está autenticado", () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });

  test("should de mostrarel componente de marvel si está auntenticadp", () => {
    const contextValue = {
      user: {
        logged: true,
        name: "Dani",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBeTruthy();
  });
});
