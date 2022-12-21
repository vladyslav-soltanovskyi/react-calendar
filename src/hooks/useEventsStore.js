import { useContext } from "react";
import { EventsStoreContext } from "../providers/EventsStore/EventsStore";

export function useEventsStore() {
  return useContext(EventsStoreContext);
}