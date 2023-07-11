const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const GET_USERS = 'GET-USERS';
const GET_TOTAL_COUNT = 'GET-TOTAL-COUNT';

const initialState = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 0,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
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
    case UNFOLLOW:
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
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case GET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      }
    default:
      return state;
  }
}

export const followActionCreator = (userId) => ({type: FOLLOW, payload: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, payload: userId});
export const setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const getUsersActionCreator = (users) => ({type: GET_USERS, payload: users});
export const getTotalCountActionCreator = (totalCount) => ({type: GET_TOTAL_COUNT, payload: totalCount});
