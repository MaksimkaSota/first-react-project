import { addMessageActionCreator, setMessageActionCreator } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';

export const DialogsContainer = ({store}) => {
  const state = store.getState();

  const addMessage = () => {
    store.dispatch(addMessageActionCreator());
  };

  const setMessage = (text) => {
    const action = setMessageActionCreator(text);
    store.dispatch(action);
  }

  return (
    <Dialogs dialogsState={state.dialogsPage} addMessage={addMessage} setMessage={setMessage}/>
  );
};
