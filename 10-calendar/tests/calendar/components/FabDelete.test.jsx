import { render, screen } from "@testing-library/react";
import { FabDelete } from "../../../src/calendar/components/FabDelete";
import { useCalendarStore } from "../../../src/hooks/useCalendarStore";

jest.mock("../../../src/hooks/useCalendarStore");
describe("pruebas en FabDelete", () => {
  test("should mostrar el componente correctamente", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    });
    render(<FabDelete />);
    screen.debug();
    const btn = screen.getByLabelText("btn-delete");
    expect(btn.className).toContain("btn");
    expect(btn.className).toContain("btn-danger");
    expect(btn.className).toContain("fab-danger");
    expect(btn.style.display).toBe("none");
  });
});
