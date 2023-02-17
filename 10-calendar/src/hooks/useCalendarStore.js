import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onSetActionEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActionEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };
  const startDeleteEvent = () => {
    // Todo:llegar al backend
    dispatch(onDeleteEvent());
  };
  return {
    //*Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //*Métodos
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
  };
};
