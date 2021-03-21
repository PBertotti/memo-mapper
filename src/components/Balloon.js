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
    paddingTop: "25px",
    fontSize: "22px",
    position: "relative",
    fontFamily: "Roboto, sans-serif",
    writingMode: "vertical-rl",
    border: "none",
    outline: "none",
    background: "none",
    resize: "none",
  },
  decision: {
    transform: "rotate(45deg)",
    width: "90px",
    height: "90px",
    marginBottom: "20px",
    marginLeft: "30%",
  },
  decisionText: {
    fontWeight: 500,
    textAlign: "center",
    wordBreak: "break-word",
    width: "100%",
    paddingTop: "30px",
    fontSize: "22px",
    position: "relative",
    fontFamily: "Roboto, sans-serif",
    writingMode: "vertical-rl",
    border: "none",
    outline: "none",
    background: "none",
    resize: "none",
    transform: "rotate(-45deg)",
  },
  sphere: {
    width: "120px",
    height: "120px",
    marginBottom: "20px",
    marginLeft: "30%",
    borderRadius: 100,
  },
  sphereText: {
    fontWeight: 500,
    textAlign: "center",
    wordBreak: "break-word",
    width: "100%",
    paddingTop: "50px",
    fontSize: "22px",
    position: "relative",
    fontFamily: "Roboto, sans-serif",
    writingMode: "vertical-rl",
    border: "none",
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
    case "rectangle":
      return (
        <Paper variant="outlined">
          <textarea className={classes.text}>{props.content}</textarea>
        </Paper>
      );
    case "decision":
      return (
        <Paper variant="outlined" className={classes.decision}>
          <textarea className={classes.decisionText}>{props.content}</textarea>
        </Paper>
      );
    case "sphere":
      return (
        <Paper variant="outlined" className={classes.sphere}>
          <textarea className={classes.sphereText}>{props.content}</textarea>
        </Paper>
      );
    default:
      return null;
  }
};
// ----------------------------
