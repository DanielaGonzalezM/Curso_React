export const events = [
  {
    id: 1,
    title: "Cumpleaños prueba 1",
    notes: "Comprar torta prueba",
    start: new Date("2022-10-21 13:00:00"),
    end: new Date("2022-10-21 15:00:00"),
    bgColor: "#fafafa",
  },
  {
    id: 2,
    title: "Cumpleaños prueba 2",
    notes: "Comprar tartaleta prueba",
    start: new Date("2022-10-22 13:00:00"),
    end: new Date("2022-10-22 15:00:00"),
    bgColor: "#fafafa",
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [
    //tempEvent
  ],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
