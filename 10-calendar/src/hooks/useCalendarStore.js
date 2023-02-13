import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActionEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActionEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };
  return {
    //*Propiedades
    events,
    activeEvent,
    //*Métodos
    setActiveEvent,
    startSavingEvent, 
  };
};
