import classes from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';

export const Dialogs = ({dialogsState}) => {
  const dialogsElements = dialogsState.dialogs
    .map((dialog, index) => <Dialog name={dialog.name} id={dialog.id} key={index} />);

  const messagesElements = dialogsState.messages
    .map((message, index) => <Message message={message.message} key={index} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsElements}
      </div>
      <div className={classes.messageItems}>
        {messagesElements}
      </div>
    </div>
  );
};
