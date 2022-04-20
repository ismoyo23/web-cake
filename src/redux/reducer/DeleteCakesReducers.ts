import { Action, ActionType } from "../type/deleteCake";

export interface DeleteCake {
  id: number;
}

interface State {
  deleteCake: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  deleteCake: [],
  loading: false,
  error: null,
};

const GetReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.DELETE_PENDING:
      return {
        loading: false,
        deleteCake: [],
        error: null,
      };
    case ActionType.DELETE_SUCCESS:
      return {
        loading: false,
        deleteCake: action.payload,
        error: null,
      };
    case ActionType.DELETE_FAIL:
      return {
        loading: false,
        deleteCake: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default GetReducer;
