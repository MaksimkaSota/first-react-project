import { followAPI, getUsersAPI, unfollowAPI } from '../api/usersAPI';

const FOLLOW_SUCCESS = 'FOLLOW-SUCCESS';
const UNFOLLOW_SUCCESS = 'UNFOLLOW-SUCCESS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'GET-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_SUBSCRIPTIONS_ID = 'SET-SUBSCRIPTIONS-ID';

const initialState = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 0,
  isFetching: true,
  subscriptionsId: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              followed: true
            }
          }
          return user;
        })
      }
    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              followed: false
            }
          }
          return user;
        })
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
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
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
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching});
export const setSubscriptionsId = (userId, isFetching) => ({
  type: SET_SUBSCRIPTIONS_ID,
  payload: {userId, isFetching}
});

//ThunkCreators
export const getUsers = (page, count) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await getUsersAPI(page, count);
    dispatch(setCurrentPage(page));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(setIsFetching(false));
  }
};
export const follow = (id) => {
  return async (dispatch) => {
    dispatch(setSubscriptionsId(id, true));
    const data = await followAPI(id);
    if (data.resultCode === 0) {
      dispatch(followSuccess(id));
    }
    dispatch(setSubscriptionsId(id, false));
  }
};
export const unfollow = (id) => {
  return async (dispatch) => {
    dispatch(setSubscriptionsId(id, true));
    const data = await unfollowAPI(id);
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(id));
    }
    dispatch(setSubscriptionsId(id, false));
  }
};
