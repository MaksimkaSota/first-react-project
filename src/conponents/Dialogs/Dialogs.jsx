import classes from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { DialogsFormContainer } from './DialogsForm/DialogsFormContainer';

export const Dialogs = ({dialogs, messages, addMessage}) => {
  const dialogsElements = dialogs
    .map((dialog, index) => <Dialog name={dialog.name} id={dialog.id} key={index} />);
  const messagesElements = messages
    .map((message, index) => <Message message={message.message} key={index} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsElements}
      </div>
      <div className={classes.messageItems}>
        <div>{messagesElements}</div>
        <DialogsFormContainer addMessage={addMessage} />
      </div>
    </div>
  );
};
