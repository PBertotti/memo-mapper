// -----------------------------
// File: store.js
// Author: Paulo Bruno B. Corá
// Date: 19/03/2021
// Brief: Memo mapper redux store
// ----------------------------

// ----------------------------
// Import redux dependencies;
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
// ----------------------------

// ----------------------------
// [dev] Compose Debug Enhancers;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

// Create redux store;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
// ----------------------------

// ----------------------------
export default store;
// ----------------------------
