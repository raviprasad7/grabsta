import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import * as reducers from "../reducers";
import { combineReducers } from "redux";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  combineReducers(reducers),
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
