import * as ActionTypes from './ActionTypes';

export default function reducer(state = [], action) {
    switch (action.type){
        case ActionTypes.ADD_BUG:
            // eslint-disable-next-line no-use-before-define
            let lastId =  0;

            return [
                ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }]
        case ActionTypes.REMOVE_BUG :
            return state.filter(bug => bug.id !== action.payload.id)
        case ActionTypes.BUG_RESOLVED :
            return state.map(bug =>  ( {
                ...bug,
                    resolved:  bug.id === action.payload.id,
            }) )
        default:
            return state
    }
}