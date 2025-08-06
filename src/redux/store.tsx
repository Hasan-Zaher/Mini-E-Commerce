import { configureStore } from '@reduxjs/toolkit';
import { Provider  } from 'react-redux';
import { ReactNode } from 'react';

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const ReduxProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
