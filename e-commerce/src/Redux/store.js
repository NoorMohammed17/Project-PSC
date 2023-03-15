import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as authReducer } from "./authRedux/reducer";
import { reducer as productsReducer } from "./productsRedux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  productsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
