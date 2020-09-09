// eslint-disable-next-line
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const initialState = {};

const rootReducer = combineReducers({
  index: (state = initialState, action) => {
    switch (action.type) {
      case 'HYDRATE':
        console.log('HYDRATE', action);
        return { ...state, ...action.playload };
      default:
        return state;
    }
  },
});

export default rootReducer;
