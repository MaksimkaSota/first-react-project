import { getAuthAPI, loginAPI, logoutAPI } from '../api/authAPI';

const SET_AUTH_USER_DATA = 'first-react-project/auth/SET-AUTH-USER-DATA';
const RESET_AUTH_USER_DATA = 'first-react-project/auth/RESET-AUTH-USER-DATA';

const initialState = {
  id: null,
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
    case RESET_AUTH_USER_DATA:
      return {
        ...state,
        ...initialState
      }
    default:
      return state;
  }
};

//ActionCreators
export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, payload: data});
export const resetAuthUserData = () => ({type: RESET_AUTH_USER_DATA});

//ThunkCreators
export const getAuthUserData = () => {
  return async (dispatch) => {
    const data = await getAuthAPI();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data));
    }
    return data;
  }
};

export const login = (email, password, rememberMe, setStatus, setSubmitting) => {
  return async (dispatch) => {
    const data = await loginAPI(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      setStatus(message);
    }
    setSubmitting(false);
  }
};

export const logout = () => {
  return async (dispatch) => {
    const data = await logoutAPI();
    if (data.resultCode === 0) {
      dispatch(resetAuthUserData());
    }
  }
};
