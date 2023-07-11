const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const GET_USERS = 'GET-USERS';
const GET_TOTAL_COUNT = 'GET-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING'

const initialState = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 0,
  isFetching: false
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
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    default:
      return state;
  }
}

export const follow = (userId) => ({type: FOLLOW, payload: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, payload: userId});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const getUsers = (users) => ({type: GET_USERS, payload: users});
export const getTotalCount = (totalCount) => ({type: GET_TOTAL_COUNT, payload: totalCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching});
