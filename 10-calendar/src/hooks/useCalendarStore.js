import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import {
  onAddNewEvent,
  onSetActionEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActionEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // Creando
      const { data } = await calendarApi.post("/events", calendarEvent);

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
    }
  };
  const startDeleteEvent = () => {
    // Todo:llegar al backend
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = convertEventsToDateEvents(data.eventos);
      console.log(events);
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  return {
    //*Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    //*Métodos
    setActiveEvent,
    startDeleteEvent,
    startLoadingEvents,
    startSavingEvent,
  };
};
