import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import albumSlice from './album';
import chartSlice from './chart';
import configSlice from './config';
import playerSlice from './player';

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
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
