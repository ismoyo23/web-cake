import { combineReducers } from "redux";
// =============================================
// import from reducers auth

import getCake from "../redux/reducer/GetReducers";
import addCake from "../redux/reducer/AddCakesReducers";
import updateCake from "../redux/reducer/UpdateCakeReducers";

// export combine reducers
let reducer = combineReducers({
  cakeData: getCake,
  addCake,
  updateCake,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
