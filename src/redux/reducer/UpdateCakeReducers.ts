import { Action, ActionType } from "../type/updateCake";

export interface UpdateCake {
  id: number;
}

interface State {
  updateCake: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  updateCake: [],
  loading: false,
  error: null,
};

const GetReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.UPDATE_PENDING:
      return {
        loading: false,
        updateCake: [],
        error: null,
      };
    case ActionType.UPDATE_SUCCESS:
      return {
        loading: false,
        updateCake: action.payload,
        error: null,
      };
    case ActionType.UPDATE_FAIL:
      return {
        loading: false,
        updateCake: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default GetReducer;
