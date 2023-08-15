import { getAuthUserData } from './auth-reduser';

const INITIALIZED_SUCCESS = 'first-react-project/app/INITIALIZED-SUCCESS';

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
};

//ActionCreators
export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//ThunkCreators
export const initialize = () => {
  return async (dispatch) => {
    try {
      await dispatch(getAuthUserData());
      dispatch(setInitializedSuccess());
    } catch (error) {
      console.log(error.message);
    }
  }
};
