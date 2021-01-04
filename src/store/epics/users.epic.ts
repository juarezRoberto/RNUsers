import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { getUsersAPI } from '../../api/jsonplaceholder.api';
import { Actions } from 'react-native-router-flux';

import {
  getUsers,
  GetUsers,
  getUsersError,
  GetUsersError,
  getUsersSuccess,
  GetUsersSuccess,
} from '../actions/users.actions';
import { noopAction, NoopAction } from '../actions/shared.actions';

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

type GetUsersSuccessOutputActions = NoopAction;
type GetUsersSuccessInputActions =
  | GetUsersSuccess
  | GetUsersSuccessOutputActions;

const getUsersSuccessEpic$: Epic<
  GetUsersSuccessInputActions,
  GetUsersSuccessOutputActions
> = (actions$) =>
  actions$.pipe(
    filter(getUsersSuccess.match),
    tap(() => {
      Actions.groupUsers();
    }),
    mapTo(noopAction()),
  );

export type UsersInputActions = GetUsersInputActions;
export type UsersOutputActions = GetUsersOutputActions;

export const usersEpics$ = combineEpics(getUsersEpic$, getUsersSuccessEpic$);
