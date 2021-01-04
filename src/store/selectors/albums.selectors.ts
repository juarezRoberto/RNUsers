import { createSelector } from '@reduxjs/toolkit';
import { selectAlbumsState } from '.';

export const selectAlbums = createSelector(
  selectAlbumsState,
  (state) => state.result,
);
