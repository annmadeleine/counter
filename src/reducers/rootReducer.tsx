import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counterReducer';

const rootReducer = combineReducers({
  Counter: counterSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
