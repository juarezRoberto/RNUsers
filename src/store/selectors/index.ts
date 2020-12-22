import { RootState } from '../reducers';
import { usersKey } from '../reducers/users.reducer';

export const selectUsersState = (state: RootState) => state[usersKey];
