const ADD_POST_IN_STATE = 'ADD-POST-IN-STATE';
const SET_POST_IN_STATE = 'SET-POST-IN-STATE';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', numberOfLike: 15},
    {id: 2, message: 'It\'s my first post', numberOfLike: 20},
    {id: 3, message: 'Blabla', numberOfLike: 20},
    {id: 4, message: 'Dada', numberOfLike: 20},
  ],
  postText: 'I\'m default post text'
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_IN_STATE:
      const newPost = {
        id: 5,
        message: state.postText,
        numberOfLike: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        postText: ''
      };
    case SET_POST_IN_STATE:
      return {
        ...state,
        postText: action.payload
      };
    default:
      return state;
  }
}

export const addPost = () => ({type: ADD_POST_IN_STATE});
export const setPost = (text) => ({type: SET_POST_IN_STATE, payload: text});
