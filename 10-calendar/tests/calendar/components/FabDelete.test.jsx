import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { FabDelete } from "../../../src/calendar/components/FabDelete";
import { store } from "../../../src/store";
//! incompleto
describe("pruebas en FabDelete", () => {
  test("should mostrar el componente correctamente", () => {
    render(
      <Provider store={store}>
        <FabDelete />
      </Provider>
    );
    screen.debug();
  });
});
