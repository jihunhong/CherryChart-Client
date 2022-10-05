import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, REHYDRATE } from 'redux-persist';
import albumSlice from './album';
import chartSlice from './chart';
import configSlice from './config';
import contentSlice from './content';
import playerSlice, { initialState as playerInitialState } from './player';
import artistSlice from './artist';
import userSlice from './user';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['player'],
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case REHYDRATE:
      return {
        ...action.payload?._persist,
        ...state,
        player: {
          ...playerInitialState,
          // persist로 저장된 객체중 playList와 selectedIndex만 불러옴
          selectedIndex: action.payload?.player?.selectedIndex || 0,
          playList: action.payload?.player?.playList || [],
          ...action.payload?.player?._persist,
        },
      };
    default: {
      const combineReducer = combineReducers({
        player: playerSlice.reducer,
        config: configSlice.reducer,
        chart: chartSlice.reducer,
        album: albumSlice.reducer,
        content: contentSlice.reducer,
        artist: artistSlice.reducer,
        user: userSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export default rootReducer;
