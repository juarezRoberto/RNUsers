import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { getAlbumsAPI } from '../../api/jsonplaceholder.api';
import { Actions } from 'react-native-router-flux';

import {
  getAlbums,
  GetAlbums,
  getAlbumsError,
  GetAlbumsError,
  getAlbumsSuccess,
  GetAlbumsSuccess,
} from '../actions/albums.actions';
import { noopAction, NoopAction } from '../actions/shared.actions';

type GetAlbumsOutputActions = GetAlbumsSuccess | GetAlbumsError;
type GetAlbumsInputActions = GetAlbums | GetAlbumsOutputActions;

const getAlbumsEpic$: Epic<GetAlbumsInputActions, GetAlbumsOutputActions> = (
  actions$,
) =>
  actions$.pipe(
    filter(getAlbums.match),
    switchMap(({ payload: { userId } }) =>
      getAlbumsAPI(userId).pipe(
        map((payload) => getAlbumsSuccess(payload)),
        catchError((error) => of(getAlbumsError(error))),
      ),
    ),
  );

// type GetAlbumsSuccessOutputActions = NoopAction;
// type GetAlbumsSuccessInputActions =
//   | GetAlbumsSuccess
//   | GetAlbumsSuccessOutputActions;

// const getAlbumsSuccessEpic$: Epic<
//   GetAlbumsSuccessInputActions,
//   GetAlbumsSuccessOutputActions
// > = (actions$) =>
//   actions$.pipe(
//     filter(getAlbumsSuccess.match),
//     tap(() => {
//       Actions.groupUsers();
//     }),
//     mapTo(noopAction()),
//   );

export type AlbumsInputActions = GetAlbumsInputActions;
export type AlbumsOutputActions = GetAlbumsOutputActions;

export const albumsEpics$ = combineEpics(getAlbumsEpic$);
