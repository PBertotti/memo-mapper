// -----------------------------
// File: balloons.js
// Author: Paulo Bruno B. Corá
// Date: 19/03/2021
// Brief: Memo mapper balloons reducer
// ----------------------------

// ----------------------------
// Import balloons action types;
import { ADD_BALLOON } from "../../actions/balloons/types";

// Import balloons preset config;
import ballonPreset from "../../../utils/config/balloonPreset.json";
// ----------------------------

// ----------------------------
//Define initial state;
const initialState = {
  balloonList: ballonPreset,
};

//Create balloons reducer;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BALLOON:
      const emptyBallon = state.balloonList.find((item) => item.shape === "");
      const emptyBallonIndex = state.balloonList.indexOf(emptyBallon);

      const filledBallon = {
        ...emptyBallon,
        content: action.payload.content,
        shape: action.payload.shape,
      };

      let newBallonList = [...state.balloonList];
      newBallonList[emptyBallonIndex] = filledBallon;

      return { balloonList: newBallonList };

    default:
      return { ...state };
  }
};
// ----------------------------
