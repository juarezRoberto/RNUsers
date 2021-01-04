import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { RootState } from '../reducers';
import {
  UsersInputActions,
  UsersOutputActions,
  usersEpics$,
} from './users.epic';

import {
  AlbumsInputActions,
  AlbumsOutputActions,
  albumsEpics$,
} from './albums.epics';

type AllInputActions = UsersInputActions | AlbumsInputActions;
type AllOutputActions = UsersOutputActions | AlbumsOutputActions;

export const epicMiddleware = createEpicMiddleware<
  AllInputActions,
  AllOutputActions,
  RootState
>();

export const rootEpic$ = combineEpics(usersEpics$, albumsEpics$);
