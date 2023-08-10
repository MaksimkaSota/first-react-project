import { getAuthAPI, getCaptchaUrlAPI, loginAPI, logoutAPI } from '../api/authAPI';

const SET_AUTH_USER_DATA = 'first-react-project/auth/SET-AUTH-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'first-react-project/auth/GET-CAPTCHA-URL-SUCCESS';
const RESET_AUTH_USER_DATA = 'first-react-project/auth/RESET-AUTH-USER-DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});
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

export const login = (email, password, rememberMe, captcha, setStatus, setSubmitting) => {
  return async (dispatch) => {
    const data = await loginAPI(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaURL());
      }
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      setStatus(message);
    }
    setSubmitting(false);
  }
};

export const getCaptchaURL = () => {
  return async (dispatch) => {
    const data = await getCaptchaUrlAPI();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
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
