import { createAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { withPayloadType } from '../../utils';

export const getUsers = createAction('[Users] Get Users');

export type GetUsers = ReturnType<typeof getUsers>;

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  withPayloadType<User[]>(),
);

export type GetUsersSuccess = ReturnType<typeof getUsersSuccess>;

export const getUsersError = createAction(
  '[Users] Get Users Error',
  withPayloadType<{ error: any }>(),
);

export type GetUsersError = ReturnType<typeof getUsersError>;
