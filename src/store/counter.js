import { configureStore } from '@reduxjs/toolkit';
import counterslice from '../slice/counterslice';
import postsReducer from '../slice/postslice';
export const store = configureStore({
  reducer: {
    counter: counterslice,
    posts:postsReducer
  },
});

export default store;
