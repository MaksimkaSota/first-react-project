import { addMessage, setMessage } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  messageText: state.dialogsPage.messageText,
});
const mapDispatchToProps = {addMessage, setMessage};

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect,
)(Dialogs);
