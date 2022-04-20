import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../type/cake";

export const getCake = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CAKE_PENDING,
    });

    try {
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_URL}/cakes?page=1`,
      });

      dispatch({
        type: ActionType.CAKE_SUCCESS,
        payload: data.data.items,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.CAKE_FAIL,
        payload: err.message,
      });
    }
  };
};
