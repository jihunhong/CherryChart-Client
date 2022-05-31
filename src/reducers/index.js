import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import albumSlice from './album';
import chartSlice from './chart';
import configSlice from './config';
import contentSlice from './content';
import playerSlice from './player';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['player'],
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      };
      if (state.player) {
        nextState.player = state.player;
      }
      return nextState;
    default: {
      const combineReducer = combineReducers({
        player: playerSlice.reducer,
        config: configSlice.reducer,
        chart: chartSlice.reducer,
        album: albumSlice.reducer,
        content: contentSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export default rootReducer;
