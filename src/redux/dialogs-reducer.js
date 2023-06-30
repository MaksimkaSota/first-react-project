const ADD_MESSAGE_IN_STATE = 'ADD-MESSAGE-IN-STATE';
const SET_MESSAGE_IN_STATE = 'SET-MESSAGE-IN-STATE';

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE_IN_STATE: {
      const newMessage = {
        id: 6,
        message: state.messageText
      };
      state.messages.push(newMessage);
      state.messageText = '';
      return state;
    }
    case SET_MESSAGE_IN_STATE:
      state.messageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE_IN_STATE});
export const setMessageActionCreator = (text) => ({
  type: SET_MESSAGE_IN_STATE,
  newText: text
});
