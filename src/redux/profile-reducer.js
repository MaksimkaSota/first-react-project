const ADD_POST_IN_STATE = 'ADD-POST-IN-STATE';
const SET_POST_IN_STATE = 'SET-POST-IN-STATE';

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST_IN_STATE:
      const newPost = {
        id: 5,
        message: state.postText,
        numberOfLike: 0
      };
      state.posts.push(newPost);
      state.postText = '';
      return state;
    case SET_POST_IN_STATE:
      state.postText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST_IN_STATE});
export const setPostActionCreator = (text) => ({
  type: SET_POST_IN_STATE,
  newText: text
});
