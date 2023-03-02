import { ActionType } from "../action-types";
// let numObject = new Number();
export interface DepositeAction {
    type: ActionType.DEPOSITE;
    payload: number;
}

export interface WithdrawAction {
    type: ActionType.WITHDRAW;
    payload: number;
}

export interface BankcurptAction {
    type: ActionType.BANKCURPT
}

export type Action = DepositeAction | WithdrawAction | BankcurptAction
