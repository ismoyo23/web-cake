import { Cake } from "../reducer/GetReducers";
export enum ActionType {
  CAKE_PENDING = "CAKE_PENDING",
  CAKE_SUCCESS = "CAKE_SUCCESS",
  CAKE_FAIL = "CAKE_FAIL",
}

interface actionPending {
  type: ActionType.CAKE_PENDING;
}

interface actionSuccess {
  type: ActionType.CAKE_SUCCESS;
  payload: Cake[];
}

interface actionFail {
  type: ActionType.CAKE_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
