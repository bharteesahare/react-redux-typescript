import { ActionType } from '../action-types';
import {Action} from '../actions/index'
const intialiState = 0;

// type Action = {
//     type: string;
//     payload: number;
// }

const reducer = (state:number = intialiState, action: Action) => {
    switch (action.type){
        case ActionType.DEPOSITE:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKCURPT:
            return 0;
        default:
            return state;

    }

}

export default reducer;
