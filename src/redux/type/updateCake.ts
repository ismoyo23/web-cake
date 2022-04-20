import { UpdateCake } from "../reducer/UpdateCakeReducers";
export enum ActionType {
  UPDATE_PENDING = "UPDATE_PENDING",
  UPDATE_SUCCESS = "UPDATE_SUCCESS",
  UPDATE_FAIL = "UPDATE_FAIL",
}

interface actionPending {
  type: ActionType.UPDATE_PENDING;
}

interface actionSuccess {
  type: ActionType.UPDATE_SUCCESS;
  payload: UpdateCake[];
}

interface actionFail {
  type: ActionType.UPDATE_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
