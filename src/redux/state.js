let rerenderEntireTree = () => {
  console.log('state changed')
}

export const state = {
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
    ]
  }
};

window.state = state;

export const addPostInState = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.postText,
    numberOfLike: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.postText = '';
  rerenderEntireTree(state);
}

export const setPostInState = (newText) => {
  state.profilePage.postText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => { // Observer (Наблюдатель)
  rerenderEntireTree = observer;
}
