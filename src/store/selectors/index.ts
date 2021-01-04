import { RootState } from '../reducers';
import { albumsKey } from '../reducers/albums.reducer';
import { usersKey } from '../reducers/users.reducer';

export const selectUsersState = (state: RootState) => state[usersKey];
export const selectAlbumsState = (state: RootState) => state[albumsKey];
