import { AddCake } from "../reducer/AddCakesReducers";
export enum ActionType {
  ADD_CAKE_PENDING = "ADD_CAKE_PENDING",
  ADD_CAKE_SUCCESS = "ADD_CAKE_SUCCESS",
  ADD_CAKE_FAIL = "ADD_CAKE_FAIL",
}

interface actionPending {
  type: ActionType.ADD_CAKE_PENDING;
}

interface actionSuccess {
  type: ActionType.ADD_CAKE_SUCCESS;
  payload: AddCake[];
}

interface actionFail {
  type: ActionType.ADD_CAKE_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
