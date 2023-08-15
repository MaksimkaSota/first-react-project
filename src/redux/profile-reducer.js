import { getProfileAPI, getStatusAPI, savePhotoAPI, saveProfileAPI, updateStatusAPI } from '../api/profileAPI';

const ADD_POST_IN_STATE = 'first-react-project/profile/ADD-POST-IN-STATE';
const SET_PROFILE = 'first-react-project/profile/SET-PROFILE';
const SET_STATUS = 'first-react-project/profile/SET-STATUS';
const DELETE_POST = 'first-react-project/profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'first-react-project/profile/SAVE-PHOTO-SUCCESS';
const SET_ERROR = 'first-react-project/profile/SET-ERROR';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', numberOfLike: 15},
    {id: 2, message: 'It\'s my first post', numberOfLike: 20},
    {id: 3, message: 'Blabla', numberOfLike: 20},
    {id: 4, message: 'Dada', numberOfLike: 20},
  ],
  profile: null,
  status: '',
  error: {
    isError: false,
    message: ''
  }
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.payload
        }
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          isError: action.payload.isError,
          message: action.payload.message,
        }
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
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, payload: photos});
export const setError = (isError, message) => ({type: SET_ERROR, payload: {isError, message}});

//ThunkCreators
export const getProfile = (userId) => {
  return async (dispatch) => {
    try {
      const data = await getProfileAPI(userId);
      dispatch(setProfile(data));
    } catch (error) {
      dispatch(setError(true, error.message));
      console.log(error.message);
    }
  }
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    try {
      const data = await getStatusAPI(userId);
      dispatch(setStatus(data));
    } catch (error) {
      dispatch(setError(true, error.message));
      console.log(error.message);
    }
  }
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    try {
      const data = await updateStatusAPI(status);
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    } catch (error) {
      dispatch(setError(true, error.message));
      console.log(error.message);
    }
  }
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    try {
      const data = await savePhotoAPI(file);
      if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
      }
    } catch (error) {
      dispatch(setError(true, error.message));
      console.log(error.message);
    }
  }
};

export const saveProfile = (file, setStatus, setSubmitting, initialValue, setEditMode) => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.id;
      const initialValuesKeys = Object.keys(initialValue);
      const contactsKeys = Object.keys(initialValue.contacts);

      const data = await saveProfileAPI(file);
      if (data.resultCode === 0) {
        dispatch(getProfile(userId));
        setEditMode(false);
      } else {
        const objectErrors = {
          contacts: {}
        };

        data.messages.forEach((message) => {
          initialValuesKeys.forEach((value) => {
            if (value === 'contacts') {
              contactsKeys.forEach((contact) => {
                if (message.toLowerCase().includes(contact.toLowerCase())) {
                  objectErrors.contacts[contact] = message;
                }
              })
            } else {
              if (message.toLowerCase().includes(value.toLowerCase())) {
                objectErrors[value] = message;
              }
            }
          })
        })

        setStatus(objectErrors);
      }
      setSubmitting(false);
    } catch (error) {
      dispatch(setError(true, error.message));
      console.log(error.message);
    }
  }
};
