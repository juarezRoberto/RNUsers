import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { RootState } from '../reducers';
import {
  UsersInputActions,
  UsersOutputActions,
  usersEpics$,
} from './users.epic';

type AllInputActions = UsersInputActions;
type AllOutputActions = UsersOutputActions;

export const epicMiddleware = createEpicMiddleware<
  AllInputActions,
  AllOutputActions,
  RootState
>();

export const rootEpic$ = combineEpics(usersEpics$);
