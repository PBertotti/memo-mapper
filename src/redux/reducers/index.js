// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 19/03/2021
// Brief: Memo mapper reducers combiner
// ----------------------------

// ----------------------------
import { combineReducers } from "redux";

import { reducer as balloonsReducer } from "../reducers/balloons";
// ----------------------------

export default combineReducers({
  balloons: balloonsReducer,
});
