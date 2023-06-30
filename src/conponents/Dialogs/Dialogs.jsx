import classes from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { addMessageActionCreator, setMessageActionCreator } from '../../redux/dialogs-reducer';

export const Dialogs = ({dialogsState, dispatch}) => {
  const dialogsElements = dialogsState.dialogs
    .map((dialog, index) => <Dialog name={dialog.name} id={dialog.id} key={index} />);
  const messagesElements = dialogsState.messages
    .map((message, index) => <Message message={message.message} key={index} />);
  const messageText = dialogsState.messageText;

  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const setMessage = (event) => {
    const text = event.target.value;
    const action = setMessageActionCreator(text);
    dispatch(action);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsElements}
      </div>
      <div className={classes.messageItems}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea onChange={setMessage} value={messageText} />
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
