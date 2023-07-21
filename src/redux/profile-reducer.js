import { getProfileAPI, getStatusAPI, updateStatusAPI } from '../api/profileAPI';

const ADD_POST_IN_STATE = 'ADD-POST-IN-STATE';
const SET_PROFILE = 'SET-PROFILE';
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const SET_STATUS = 'SET-STATUS';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', numberOfLike: 15},
    {id: 2, message: 'It\'s my first post', numberOfLike: 20},
    {id: 3, message: 'Blabla', numberOfLike: 20},
    {id: 4, message: 'Dada', numberOfLike: 20},
  ],
  profile: null,
  isFetching: true,
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
    case SET_STATUS:
      return {
        ...state,
        status: action.payload
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
export const addPost = (text) => ({type: ADD_POST_IN_STATE, payload: text});
export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching});
export const setStatus = (status) => ({type: SET_STATUS, payload: status});

//ThunkCreators
export const getProfile = (userId) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await getProfileAPI(userId);
    dispatch(setProfile(data));
    dispatch(setIsFetching(false));
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
