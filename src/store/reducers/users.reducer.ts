import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import {
  getUsers,
  getUsersError,
  getUsersSuccess,
} from '../actions/users.actions';

export type UsersState = {
  loading: boolean;
  loaded: boolean;
  error: any;
  result: User[] | null;
};

export const usersKey = 'users';

const initialState: UsersState = {
  loading: false,
  loaded: false,
  error: null,
  result: null,
};

export const usersReducer = createReducer<UsersState>(
  initialState,
  (builder) => {
    return builder
      .addCase(getUsers, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersSuccess, (state, { payload }) => {
        state.loading = false;
        state.result = payload;
        state.loaded = true;
      })
      .addCase(getUsersError, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
);
