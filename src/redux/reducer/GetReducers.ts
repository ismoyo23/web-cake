import { Action, ActionType } from "../type/cake";

export interface Cake {
  id: number;
  title: string;
  description: string;
  rating: string;
  image: string;
  created_at: string;
  updated_at: string;
}

interface State {
  cake: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  cake: [],
  loading: false,
  error: null,
};

const GetReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.CAKE_PENDING:
      return {
        loading: false,
        cake: [],
        error: null,
      };
    case ActionType.CAKE_SUCCESS:
      return {
        loading: false,
        cake: action.payload,
        error: null,
      };
    case ActionType.CAKE_FAIL:
      return {
        loading: false,
        cake: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default GetReducer;
