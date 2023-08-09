import { getProfileAPI, getStatusAPI, savePhotoAPI, saveProfileAPI, updateStatusAPI } from '../api/profileAPI';

const ADD_POST_IN_STATE = 'first-react-project/profile/ADD-POST-IN-STATE';
const SET_PROFILE = 'first-react-project/profile/SET-PROFILE';
const SET_STATUS = 'first-react-project/profile/SET-STATUS';
const DELETE_POST = 'first-react-project/profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'first-react-project/profile/SAVE-PHOTO-SUCCESS';

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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.payload
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

export const savePhoto = (file) => {
  return async (dispatch) => {
    const data = await savePhotoAPI(file);
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  }
};

export const saveProfile = (file, setStatus, setSubmitting, initialValue) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;
    const initialValuesKeys = Object.keys(initialValue);
    const contactsKeys = Object.keys(initialValue.contacts);

    const data = await saveProfileAPI(file);
    if (data.resultCode === 0) {
      dispatch(getProfile(userId));
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
  }
};
