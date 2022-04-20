import { DeleteCake } from "../reducer/DeleteCakesReducers";
export enum ActionType {
  DELETE_PENDING = "DELETE_PENDING",
  DELETE_SUCCESS = "DELETE_SUCCESS",
  DELETE_FAIL = "DELETE_FAIL",
}

interface actionPending {
  type: ActionType.DELETE_PENDING;
}

interface actionSuccess {
  type: ActionType.DELETE_SUCCESS;
  payload: DeleteCake[];
}

interface actionFail {
  type: ActionType.DELETE_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
