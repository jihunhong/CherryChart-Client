import * as types from '../actions/actionTypes';
import produce from 'immer';

export const configInitialState = {
    site : 'melon',
};
  
const reducer = (state = configInitialState, action) => {
    return produce(state, (draft) => {
        switch (action.type){
            case types.ASSIGN_SITE_NAME:
                draft.site = action.data.site;
                break;
            default:
                break;
        }
    })
};

export default reducer;