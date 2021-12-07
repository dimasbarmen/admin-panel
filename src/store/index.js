import {configureStore, createSlice} from '@reduxjs/toolkit'
import {initialState} from './initialState';
import reducers from './actions';
import selectors from './selectors';

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const Actions = appSlice.actions;
export const Selectors = selectors;

export const store = configureStore({
  reducer: appSlice.reducer,
});
