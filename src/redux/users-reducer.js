const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'GET-USERS'

const initialState = {
  users: []
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
    case SET_USERS:
      return {
        ...state,
        users: action.payload
        // users: [
        //   ...state.users,
        //   ...action.users
        // ]
      }
    default:
      return state;
  }
}

export const followActionCreator = (userId) => ({type: FOLLOW, payload: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, payload: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, payload: users});
