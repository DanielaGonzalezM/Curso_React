import { shallow } from "enzyme";
import MultipleCustomHook from "../../../../components/03-examples/MultipleCustomHook";
import { useCounter } from "../../../../hooks/useCounter";
import { useFetch } from "../../../../hooks/useFetch";
jest.mock("../../../../hooks/useFetch");
jest.mock("../../../../hooks/useCounter");
describe("Pruebas en MultipleCustomHook", () => {
  
  test("debe mostrarse correctamente", () => {
    useCounter.mockReturnValue({
      cont: 10,
      increment: () => {},
    });
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHook />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar información", () => {
    useCounter.mockReturnValue({
      cont: 10,
      increment: () => {},
    });
    useFetch.mockReturnValue({
      data: [
        {
          author: "El cuervo",
          quote: "Todo hombre tiene un diablo y no descansa hasta encontrarlo",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHook />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-2").text().trim()).toBe(
      "Todo hombre tiene un diablo y no descansa hasta encontrarlo"
    );
    expect(wrapper.find("footer").text().trim()).toBe("El cuervo");
  });
});
