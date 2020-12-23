import { configureStore } from '@reduxjs/toolkit';
import { epicMiddleware, rootEpic$ } from './epics';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
  devTools: __DEV__,
});

epicMiddleware.run(rootEpic$);
