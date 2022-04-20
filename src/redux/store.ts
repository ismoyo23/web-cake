import { createStore, applyMiddleware } from "redux";
// =========================================================
import thunk from "redux-thunk";
import rootReducer from "./index";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// =========================================================

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
// ========================================================
export default { store, persistor };
