import { createAction } from '@reduxjs/toolkit';
import { Album } from '../../types/album';
import { withPayloadType } from '../../utils';

export const getAlbums = createAction(
  '[Albums] Get Albums',
  withPayloadType<{ userId: number }>(),
);

export type GetAlbums = ReturnType<typeof getAlbums>;

export const getAlbumsSuccess = createAction(
  '[Albums] Get Albums Success',
  withPayloadType<Album[]>(),
);

export type GetAlbumsSuccess = ReturnType<typeof getAlbumsSuccess>;

export const getAlbumsError = createAction(
  '[Albums] Get Albums Error',
  withPayloadType<{ error: any }>(),
);

export type GetAlbumsError = ReturnType<typeof getAlbumsError>;
