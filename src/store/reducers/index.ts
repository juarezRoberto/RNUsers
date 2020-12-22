import { combineReducers } from '@reduxjs/toolkit';
import { usersKey, usersReducer } from './users.reducer';

export const rootReducer = combineReducers({
  [usersKey]: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
