import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions/index"

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSITE,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount,
        })
    }
}

export const bankcurpt = (amount: number) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKCURPT
        })
    }
}
