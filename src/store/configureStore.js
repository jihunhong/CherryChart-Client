import rootReducer, { persistedReducer } from '@reducers/index';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

const isDev = false;
const createStore = () => {
  const middleware = getDefaultMiddleware();
  if (isDev) {
    middleware.push(logger);
  }
  const isServer = typeof window === 'undefined';

  if (isServer) {
    const store = configureStore({
      reducer: rootReducer,
      middleware,
      devTools: true,
    });
    return store;
  }
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: true,
  });
  const persistor = persistStore(store);
  return { persistor, ...store };
};

const wrapper = createWrapper(createStore, {
  debug: true,
});

export default wrapper;
