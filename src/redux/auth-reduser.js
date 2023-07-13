const GET_AUTH_USER_DATA = 'GET-AUTH-USER-DATA';

const initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    // case SET_IS_FETCHING:
    //   return {
    //     ...state,
    //     isFetching: action.payload
    //   }
    default:
      return state;
  }
}

export const getAuthUserData = (data) => ({type: GET_AUTH_USER_DATA, payload: data});
// export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching});
