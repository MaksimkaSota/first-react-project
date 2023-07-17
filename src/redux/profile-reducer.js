import { getProfileAPI } from '../api/profileAPI';

const ADD_POST_IN_STATE = 'ADD-POST-IN-STATE';
const SET_POST_IN_STATE = 'SET-POST-IN-STATE';
const SET_PROFILE = 'SET-PROFILE';
const SET_IS_FETCHING = 'SET-IS-FETCHING'

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', numberOfLike: 15},
    {id: 2, message: 'It\'s my first post', numberOfLike: 20},
    {id: 3, message: 'Blabla', numberOfLike: 20},
    {id: 4, message: 'Dada', numberOfLike: 20},
  ],
  postText: 'I\'m default post text',
  profile: null,
  isFetching: true
};

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
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    default:
      return state;
  }
};

//ActionCreators
export const addPost = () => ({type: ADD_POST_IN_STATE});
export const setPost = (text) => ({type: SET_POST_IN_STATE, payload: text});
export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching});

//ThunkCreators
export const getProfile = (userId) => (dispatch) => {
  dispatch(setIsFetching(true));
  getProfileAPI(userId).then((data) => {
    dispatch(setProfile(data));
    dispatch(setIsFetching(false));
  });
};
