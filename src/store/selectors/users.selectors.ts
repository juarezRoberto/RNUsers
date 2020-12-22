import { createSelector } from '@reduxjs/toolkit';
import { selectUsersState } from '.';

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.result,
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state) => state.loading,
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state) => state.error,
);
