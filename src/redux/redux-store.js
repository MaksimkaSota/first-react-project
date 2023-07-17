import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reduser';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
