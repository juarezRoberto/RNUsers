import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { getUsersAPI } from '../../api/users.api';
import {
  getUsers,
  GetUsers,
  getUsersError,
  GetUsersError,
  getUsersSuccess,
  GetUsersSuccess,
} from '../actions/users.actions';

type GetUsersOutputActions = GetUsersSuccess | GetUsersError;
type GetUsersInputActions = GetUsers | GetUsersOutputActions;

const getUsersEpic$: Epic<GetUsersInputActions, GetUsersOutputActions> = (
  actions$,
) =>
  actions$.pipe(
    filter(getUsers.match),
    switchMap(() =>
      getUsersAPI().pipe(
        map((payload) => getUsersSuccess(payload)),
        catchError((error) => of(getUsersError(error))),
      ),
    ),
  );

export type UsersInputActions = GetUsersInputActions;
export type UsersOutputActions = GetUsersOutputActions;

export const usersEpics$ = combineEpics(getUsersEpic$);
