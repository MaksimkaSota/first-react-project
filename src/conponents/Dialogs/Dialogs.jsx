import classes from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { DialogsReduxForm } from './DialogsForm/DialogsForm';

export const Dialogs = ({dialogs, messages, addMessage}) => {
  const dialogsElements = dialogs
    .map((dialog, index) => <Dialog name={dialog.name} id={dialog.id} key={index} />);
  const messagesElements = messages
    .map((message, index) => <Message message={message.message} key={index} />);

  const onSubmitMessage = (formData) => {
    addMessage(formData.text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsElements}
      </div>
      <div className={classes.messageItems}>
        <div>{messagesElements}</div>
        <DialogsReduxForm onSubmit={onSubmitMessage} />
      </div>
    </div>
  );
};
