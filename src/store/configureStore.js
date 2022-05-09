import rootReducer from '@reducers/index';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

const isDev = false;
const createStore = () => {
  const middleware = getDefaultMiddleware();
  if (isDev) {
    middleware.push(logger);
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: false,
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: true,
});

export default wrapper;
