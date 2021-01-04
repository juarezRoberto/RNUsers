import { createReducer } from '@reduxjs/toolkit';
import { Album } from '../../types/album';
import {
  getAlbums,
  getAlbumsError,
  getAlbumsSuccess,
} from '../actions/albums.actions';

export type AlbumsState = {
  loading: boolean;
  loaded: boolean;
  error: any;
  result: Album[] | null;
};

export const albumsKey = 'albums';

const initialState: AlbumsState = {
  loading: false,
  loaded: false,
  error: null,
  result: null,
};

export const albumsReducer = createReducer<AlbumsState>(
  initialState,
  (builder) => {
    return builder
      .addCase(getAlbums, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAlbumsSuccess, (state, { payload }) => {
        state.loading = false;
        state.result = payload;
        state.loaded = true;
      })
      .addCase(getAlbumsError, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
);
