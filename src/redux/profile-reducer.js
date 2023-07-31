import { getProfileAPI, getStatusAPI, updateStatusAPI } from '../api/profileAPI';

const ADD_POST_IN_STATE = 'ADD-POST-IN-STATE';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', numberOfLike: 15},
    {id: 2, message: 'It\'s my first post', numberOfLike: 20},
    {id: 3, message: 'Blabla', numberOfLike: 20},
    {id: 4, message: 'Dada', numberOfLike: 20},
  ],
  profile: null,
  status: ''
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_IN_STATE:
      const newPost = {
        id: 5,
        message: action.payload,
        numberOfLike: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};

//ActionCreators
export const addPost = (text) => ({type: ADD_POST_IN_STATE, payload: text});
export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const setStatus = (status) => ({type: SET_STATUS, payload: status});
export const deletePost = (postId) => ({type: DELETE_POST, payload: postId});


//ThunkCreators
export const getProfile = (userId) => {
  return async (dispatch) => {
    const data = await getProfileAPI(userId);
    dispatch(setProfile(data));
  }
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    const data = await getStatusAPI(userId);
    dispatch(setStatus(data));
  }
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    const data = await updateStatusAPI(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  }
};
