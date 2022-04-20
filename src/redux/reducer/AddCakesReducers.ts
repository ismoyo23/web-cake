import { Action, ActionType } from "../type/addCake";

export interface AddCake {
  id: number;
  title: string;
  description: string;
  rating: string;
  image: string;
  created_at: string;
  updated_at: string;
}

interface State {
  cakeadd: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  cakeadd: [],
  loading: false,
  error: null,
};

const AddCakesReducers = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.ADD_CAKE_PENDING:
      return {
        loading: false,
        cakeadd: [],
        error: null,
      };
    case ActionType.ADD_CAKE_SUCCESS:
      return {
        loading: false,
        cakeadd: action.payload,
        error: null,
      };
    case ActionType.ADD_CAKE_FAIL:
      return {
        loading: false,
        cakeadd: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AddCakesReducers;
