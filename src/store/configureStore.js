import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
const persistConfig = {
  key: 'root',
  whitelist: ['player'],
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const isServer = typeof window === 'undefined';

  if (isServer) {
    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
  } else {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistedReducer = persistReducer({ ...persistConfig, storage }, rootReducer);

    const store = createStore(persistedReducer, enhancer);
    store.__persistor = persistStore(store);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
  }
};

const wrapper = createWrapper(configureStore, {
  debug: false,
});

export default wrapper;
