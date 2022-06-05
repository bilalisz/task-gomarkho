import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import combineReducers from "./Reducers";

const middleware = [thunk];

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
