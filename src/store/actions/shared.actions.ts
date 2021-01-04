import { createAction } from '@reduxjs/toolkit';

export const noopAction = createAction('[Common] Noop');

export type NoopAction = ReturnType<typeof noopAction>;
