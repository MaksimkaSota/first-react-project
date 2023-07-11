const ADD_MESSAGE_IN_STATE = 'ADD-MESSAGE-IN-STATE';
const SET_MESSAGE_IN_STATE = 'SET-MESSAGE-IN-STATE';

const initialState = {
  dialogs: [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Eugene'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'John'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ],
  messageText: 'I\'m default message text'
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_IN_STATE:
      const newMessage = {
        id: 6,
        message: state.messageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        messageText: ''
      }
    case SET_MESSAGE_IN_STATE:
      return {
        ...state,
        messageText: action.payload
      }
    default:
      return state;
  }
}

export const addMessage = () => ({type: ADD_MESSAGE_IN_STATE});
export const setMessage = (text) => ({type: SET_MESSAGE_IN_STATE, payload: text});
