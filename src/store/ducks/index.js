import { combineReducers } from 'redux';
import favorites from './favorites';
import modal from './modal';
import users from './users';

export default combineReducers({
  favorites,
  modal,
  users,
});
