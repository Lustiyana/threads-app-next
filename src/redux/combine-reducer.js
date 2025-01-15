/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import register from './features/register/reducer';
import login from './features/login/reducer';
import toast from './features/toast/reducer';
import threads from './features/threads/reducer';
import leaderboards from './features/leaderboards/reducer';
import newThread from './features/newThread/reducer';
import detailThread from './features/detail/reducer';
import comment from './features/comment/reducer';
import users from './features/users/reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const combineReducer = combineReducers({
  register,
  login,
  toast,
  threads,
  leaderboards,
  newThread,
  detailThread,
  comment,
  users,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;
