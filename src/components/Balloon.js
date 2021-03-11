// -----------------------------
// File: Balloon.js
// Author: Paulo Bruno B. Corá
// Date: 09/03/2021
// Brief: Memo Mapper App Balloon component
// ----------------------------

// ----------------------------
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
// ----------------------------

// ----------------------------
const useStyles = makeStyles((theme) => ({
  balloon: {
    position: "absolute",
    left: 500,
    top: 100,
    textAlign: "center",
    wordBreak: "break-word",
    padding: "35px 35px 10px 35px",
    fontSize: "22px",
    borderRadius: 14,
    borderColor: "rgba(0, 0, 0, 0.18)",
    outline: "none",

    overflow: "hidden",
  },
}));
// ----------------------------

// ----------------------------
export const Balloon = (props) => {
  const classes = useStyles();
  const [balloonValue, setBalloonValue] = useState("Balloon!");

  return (
    <textarea
      onChange={(event) => {
        setBalloonValue(event.target.value);
      }}
      disableUnderline={true}
      //fullWidth={true}
      className={classes.balloon}
      value={balloonValue}
    ></textarea>
  );
};
// ----------------------------
