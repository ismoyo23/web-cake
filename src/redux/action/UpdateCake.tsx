import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../type/updateCake";

export const updatedCake = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_PENDING,
    });

    try {
      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_URL}cakes`,
      });

      dispatch({
        type: ActionType.UPDATE_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.UPDATE_FAIL,
        payload: err.message,
      });
    }
  };
};
