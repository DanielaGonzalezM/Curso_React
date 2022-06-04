import AppRouter from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";

describe("pruebas AppRouter", () => {
  const contextValue = {
    user: {
      logged: false,
    },
  };

  test("should de mostrar el login si no está autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });
});
