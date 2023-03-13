import {
  calendarSlice,
  onAddNewEvent,
  onSetActionEvent,
  onUpdateEvent,
} from "../../../src/store/calendar/calendarSlice";
import {
  calendarWithEventsState,
  events,
  initialState,
} from "../../fixtures/calendarStates";

describe("Pruebas calendarSlice", () => {
  test("should regresar el estado por defecto", () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test("onSetActiveEvent debe de activar el evento", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActionEvent(events[0])
    );
    expect(state.activeEvent).toEqual(events[0]);
  });

  test("onAddNewEvent debe de agregar el evento", () => {
    const newEvent = {
      id: 3,
      title: "Cumpleaños prueba onAddNewEvent",
      notes: "Comprar torta prueba",
      start: new Date("2020-10-21 13:00:00"),
      end: new Date("2020-10-21 15:00:00"),
      bgColor: "#fafafa",
    };
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    expect(state.events).toEqual([...events, newEvent]);
  });

  test("onUpdateEvent debe de actualizar el evento", () => {
    const updatedEvent = {
      id: 1,
      title: "Cumpleaños prueba onUpdateEvent",
      notes: "Comprar torta prueba",
      start: new Date("2020-10-21 13:00:00"),
      end: new Date("2020-10-21 15:00:00"),
      bgColor: "#fafafa",
    };
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );
    expect(state.events).toContain(updatedEvent);
  });
});
