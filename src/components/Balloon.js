// -----------------------------
// File: Balloon.js
// Author: Paulo Bruno B. Corá
// Date: 09/03/2021
// Brief: Memo Mapper App Balloon component
// ----------------------------

// ----------------------------
import { makeStyles, Paper } from "@material-ui/core";
// ----------------------------

// ----------------------------
const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: 500,
    textAlign: "center",
    wordBreak: "break-word",
    width: "100%",
    paddingTop: "20px",
    fontSize: "22px",
    position: "relative",
    fontFamily: "Roboto, sans-serif",
    border: "1px solid #D1D1D1",
    borderRadius: "7px",
    outline: "none",
    background: "none",
    resize: "none",
  },
}));
// ----------------------------

// ----------------------------
export const Balloon = (props) => {
  const classes = useStyles();

  switch (props.shape) {
    case "square":
      return <textarea className={classes.text}>{props.content}</textarea>;
    default:
      return null;
  }
};
// ----------------------------
