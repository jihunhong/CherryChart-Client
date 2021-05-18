import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import chartSlice from './chart';
import configSlice from './config';
import playerSlice from './player';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        player: playerSlice.reducer,
        config: configSlice.reducer,
        chart: chartSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
