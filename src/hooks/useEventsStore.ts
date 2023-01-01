import { useContext } from "react";
import { EventsStoreContext } from "providers/EventsStore/context";

export function useEventsStore() {
  return useContext(EventsStoreContext);
}