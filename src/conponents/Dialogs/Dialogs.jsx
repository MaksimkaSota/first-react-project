import classes from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { Navigate } from 'react-router-dom';

export const Dialogs = ({dialogs, messages, messageText, addMessage, setMessage, isAuth}) => {
  const dialogsElements = dialogs
    .map((dialog, index) => <Dialog name={dialog.name} id={dialog.id} key={index} />);
  const messagesElements = messages
    .map((message, index) => <Message message={message.message} key={index} />);

  const onAddMessage = () => {
    addMessage();
  };
  const onSetMessage = (event) => {
    const text = event.target.value;
    setMessage(text);
  };

  if (!isAuth) {
    return <Navigate to={'/login'} />
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
            <textarea onChange={onSetMessage} value={messageText} />
          </div>
          <div>
            <button onClick={onAddMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
