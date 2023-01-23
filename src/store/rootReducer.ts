import { reducer as eventsReducer } from './events/reducer';
import { reducer as modalsReducer } from './modals/reducer';
import { reducer as popupsReducer } from './popups/reducer';

export const reducers = {
  events: eventsReducer,
  modals: modalsReducer,
  popups: popupsReducer
}