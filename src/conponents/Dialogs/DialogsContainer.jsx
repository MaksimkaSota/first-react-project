import { addMessage, setMessage } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messageText: state.dialogsPage.messageText
  }
};
const mapDispatchToProps = {addMessage, setMessage};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
