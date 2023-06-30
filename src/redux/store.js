import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';

export const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', numberOfLike: 15},
        {id: 2, message: 'It\'s my first post', numberOfLike: 20},
        {id: 3, message: 'Blabla', numberOfLike: 20},
        {id: 4, message: 'Dada', numberOfLike: 20},
      ],
      postText: 'I\'m default post text'
    },
    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // _addPostInState() {
  //   const newPost = {
  //     id: 5,
  //     message: this._state.profilePage.postText,
  //     numberOfLike: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.postText = '';
  //   this._callSubscriber(this._state);
  // },
  // _setPostInState(newText) {
  //   this._state.profilePage.postText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

window.store = store;
