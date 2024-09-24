import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice'; 

// Configure the store
export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
