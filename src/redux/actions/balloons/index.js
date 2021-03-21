// -----------------------------
// File: balloons.js
// Author: Paulo Bruno B. Corá
// Date: 20/03/2021
// Brief: Memo mapper balloons actions
// ----------------------------

// ----------------------------
// Import balloons action types;
import { ADD_BALLOON } from "./types";
// ----------------------------

// ----------------------------

// Add balloons to canvas action;
export const addBallonToCanvas = (shape) => (dispatch) => {
  dispatch({ type: ADD_BALLOON, payload: shape });
};
// ----------------------------
