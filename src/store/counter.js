import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterslice from '../slice/counterslice';
import postsReducer from '../slice/postslice';
import createSagaMiddleware from 'redux-saga';
import rootsaga from '../saga/rootsaga';
import commentslice from '../slice/commentslice';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterslice,
    posts:postsReducer,
    comments:commentslice
  },

  middleware:   (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootsaga)

export default store;
