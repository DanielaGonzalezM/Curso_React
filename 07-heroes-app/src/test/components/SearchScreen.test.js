import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import SearchScreen from "../../components/search/SearchScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
describe("Pruebas en SearchScreen", () => {
  test("should mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Buscar un heroe");
  });

  test("should de mpstrar a batman y el input co el valor del subquery", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("should de mpstrar un errpr si no se encuenta el hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      "No hay resultados: batman123"
    );
  });

  test("should de mpstrar un errpr si no se encuenta el hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    wrapper
      .find("input")
      .simulate("change", { target: { name: "searchText", value: "batman" } });
    wrapper.find("form").prop("onSubmit")({ preventDefault: () => {} });

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
