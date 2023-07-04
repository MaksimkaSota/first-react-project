import { addMessageActionCreator, setMessageActionCreator } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { StoreContext } from '../../StoreContext';

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState();
          const addMessage = () => {
            store.dispatch(addMessageActionCreator());
          };
          const setMessage = (text) => {
            const action = setMessageActionCreator(text);
            store.dispatch(action);
          }

          return <Dialogs dialogsState={state.dialogsPage} addMessage={addMessage} setMessage={setMessage} />
        }
      }
    </StoreContext.Consumer>
  );
};
