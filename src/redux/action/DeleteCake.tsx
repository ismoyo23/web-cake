import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../type/deleteCake";

export const deleteData = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_PENDING,
    });

    try {
      const { data } = await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_URL}cakes/${id}`,
      });

      dispatch({
        type: ActionType.DELETE_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.DELETE_FAIL,
        payload: err.message,
      });
    }
  };
};
