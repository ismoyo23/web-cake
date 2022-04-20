import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../type/addCake";

export const addCake = (
  title: string,
  rating: string,
  image: any,
  description: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_CAKE_PENDING,
    });

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("rating", rating);
      formData.append("description", description);

      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_URL}/cakes`,
        data: formData,
      });
      dispatch({
        type: ActionType.ADD_CAKE_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.ADD_CAKE_FAIL,
        payload: err.message,
      });
    }
  };
};
