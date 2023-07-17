import { getAuthAPI } from '../api/authAPI';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

const initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    default:
      return state;
  }
};

//ActionCreators
export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, payload: data});

//ThunkCreators
export const getAuthUserData = () => (dispatch) => {
  getAuthAPI().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data));
    }
  })
};
