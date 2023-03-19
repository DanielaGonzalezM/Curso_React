import { fireEvent, render, screen } from "@testing-library/react";
import { FabDelete } from "../../../src/calendar/components/FabDelete";
import { useCalendarStore } from "../../../src/hooks/useCalendarStore";

jest.mock("../../../src/hooks/useCalendarStore");
describe("pruebas en FabDelete", () => {
  const mockStartDeleteEvent = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("should mostrar el componente correctamente", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    });
    render(<FabDelete />);
    //screen.debug();
    const btn = screen.getByLabelText("btn-delete");
    expect(btn.className).toContain("btn");
    expect(btn.className).toContain("btn-danger");
    expect(btn.className).toContain("fab-danger");
    expect(btn.style.display).toBe("none");
  });

  test("debe mostrar el botón si hay un evento activo", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    });
    render(<FabDelete />);
    //screen.debug();
    const btn = screen.getByLabelText("btn-delete");
    expect(btn.style.display).toBe("");
  });

  test("debe llamar startDeleteEvent si hay evento activo", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeleteEvent: mockStartDeleteEvent,
    });
    render(<FabDelete />);
    const btn = screen.getByLabelText("btn-delete");
    fireEvent.click(btn);
    expect(mockStartDeleteEvent).toHaveBeenCalled();
  });
});
