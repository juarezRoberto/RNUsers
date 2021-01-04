import { combineReducers } from '@reduxjs/toolkit';
import { usersKey, usersReducer } from './users.reducer';
import { albumsKey, albumsReducer } from './albums.reducer';

export const rootReducer = combineReducers({
  [usersKey]: usersReducer,
  [albumsKey]: albumsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
