import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as authReducer } from "./authRedux/reducer";
import { reducer as productsReducer } from "./productsRedux/reducer";
import {reducer as cartReducer} from "./cartRedux/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  productsReducer,
  cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
