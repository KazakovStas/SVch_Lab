import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from './candidatesSlice';
import projectsReducer from './projectsSlice';

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    projects: projectsReducer,
  },
});