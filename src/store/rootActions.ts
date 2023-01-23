import * as eventsActions from './events/actions';
import * as modalsActions from './modals/actions';
import * as popusActions from './popups/actions';

export const allActions = {
  ...eventsActions,
  ...modalsActions,
  ...popusActions
}
