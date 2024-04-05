import * as ActionTypes from "./ActionTypes";

// export  function bugAdded (description){
//     return {
//         type: ActionTypes.ADD_BUG,
//         payload : {
//             description : description,
//         }
//     }
// }

export const  bugAdded = description => ({
        type: ActionTypes.ADD_BUG,
        payload : {
            description : description,
        }
})
export  const  bugResolved = id => ({
    type: ActionTypes.BUG_RESOLVED,
    payload: {
        id
    }
})

export function bugRemoved (id){
    return {
        type: ActionTypes.REMOVE_BUG,
        payload : {
            id: id,
        }
    }
}