// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 19/03/2021
// Brief: Memo mapper balloons reducer
// ----------------------------

// ----------------------------
// Import balloons action types;
//import {} from "../../actions/balloons/types";

// Import balloons preset config;
import ballonPreset from "../../../utils/balloonPreset.json";
// ----------------------------

// ----------------------------
//Define initial state;
const initialState = {
  balloonList: ballonPreset,
};

//Create balloons reducer;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
// ----------------------------
