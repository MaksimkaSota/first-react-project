import { followAPI, getUsersAPI, unfollowAPI } from '../api/usersAPI';
import { updateObjectInArray } from '../utilits/helpers/objects-helpers';

const FOLLOW_SUCCESS = 'first-react-project/users/FOLLOW-SUCCESS';
const UNFOLLOW_SUCCESS = 'first-react-project/users/UNFOLLOW-SUCCESS';
const SET_CURRENT_PAGE = 'first-react-project/users/SET-CURRENT-PAGE';
const SET_USERS = 'first-react-project/users/SET-USERS';
const SET_TOTAL_COUNT = 'first-react-project/users/GET-TOTAL-COUNT';
const SET_SUBSCRIPTIONS_ID = 'first-react-project/users/SET-SUBSCRIPTIONS-ID';

const initialState = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 0,
  subscriptionsId: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_SUCCESS:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {followed: true})
      }
    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {followed: false})
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      }
    case SET_SUBSCRIPTIONS_ID:
      return {
        ...state,
        subscriptionsId:
          action.payload.isFetching ?
            [...state.subscriptionsId, action.payload.userId] :
            state.subscriptionsId.filter((id) => id !== action.payload.userId)
      }
    default:
      return state;
  }
};

//ActionCreators
export const followSuccess = (userId) => ({type: FOLLOW_SUCCESS, payload: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_SUCCESS, payload: userId});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const setUsers = (users) => ({type: SET_USERS, payload: users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount});
export const setSubscriptionsId = (userId, isFetching) => ({
  type: SET_SUBSCRIPTIONS_ID,
  payload: {userId, isFetching}
});

//ThunkCreators
export const getUsers = (page, count) => {
  return async (dispatch) => {
    try {
      const data = await getUsersAPI(page, count);
      dispatch(setCurrentPage(page));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    } catch (error) {
      console.log(error.message);
    }
  }
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  try {
    dispatch(setSubscriptionsId(id, true));
    const data = await apiMethod(id);
    if (data.resultCode === 0) {
      dispatch(actionCreator(id));
    }
    dispatch(setSubscriptionsId(id, false));
  } catch (error) {
    console.log(error.message);
  }
}
export const follow = (id) => {
  return async (dispatch) => {
    await followUnfollowFlow(dispatch, id, followAPI, followSuccess);
  }
};
export const unfollow = (id) => {
  return async (dispatch) => {
    await followUnfollowFlow(dispatch, id, unfollowAPI, unfollowSuccess);
  }
};
