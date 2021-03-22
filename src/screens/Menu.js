// -----------------------------
// File: Menu.js
// Author: Paulo Bruno B. Corá
// Date: 09/03/2021
// Brief: Memo Mapper App Menu component
// ----------------------------

// ----------------------------
import {
  AppBar,
  Toolbar,
  makeStyles,
  Drawer,
  Fab,
  IconButton,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import MemoLogo from "../assets/img/Memo_logo.svg";
import { ReactComponent as BalloonIcon } from "../assets/icons/balloonIcon.svg";
import { ReactComponent as DecisionIcon } from "../assets/icons/decisionIcon.svg";
import { ReactComponent as SphereIcon } from "../assets/icons/sphereIcon.svg";
import { ReactComponent as DatabaseIcon } from "../assets/icons/databaseIcon.svg";
import { useDispatch } from "react-redux";
import { addBallonToCanvas } from "../redux/actions/balloons";

// ----------------------------

// ----------------------------
const useStyles = makeStyles((theme) => ({
  navBar: { zIndex: theme.zIndex.drawer + 1 },
  navLogo: {
    paddingLeft: "10px",
    width: "200px",
  },
  drawerClosed: {
    width: "72px",
    paddingTop: "64px",
  },
  addButton: {
    marginTop: "30px",
    marginLeft: "7px",
    boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.25)",
    marginBottom: "20px",
  },
  addIcon: {
    fontSize: 36,
    color: "#FFFFFF",
  },
  shapeBtn: {
    borderRadius: "0px",
    padding: "20px 0px",
    height: "70px",
  },
}));
// ----------------------------

// ----------------------------
export const Menu = (props) => {
  // ----------------------------
  // Define constants and states;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isDrawerOpen] = useState(false);

  // ----------------------------
  // Add Shape to the canvas function;
  const addShape = (shape, content) => {
    dispatch(addBallonToCanvas(shape, content));
  };

  return (
    <div>
      <AppBar className={classes.navBar}>
        <Toolbar>
          <img src={MemoLogo} alt="memoLogo" className={classes.navLogo} />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant="permanent"
        classes={{
          paper: isDrawerOpen ? classes.drawerOpened : classes.drawerClosed,
        }}
      >
        <Fab color="primary" className={classes.addButton}>
          <Add className={classes.addIcon} />
        </Fab>
        <IconButton
          className={classes.shapeBtn}
          onClick={() => {
            addShape("rectangle", "Ballon");
          }}
        >
          <BalloonIcon />
        </IconButton>
        <IconButton
          className={classes.shapeBtn}
          onClick={() => {
            addShape("decision", "Decision");
          }}
        >
          <DecisionIcon />
        </IconButton>
        <IconButton
          className={classes.shapeBtn}
          className={classes.shapeBtn}
          onClick={() => {
            addShape("sphere", "Sphere");
          }}
        >
          <SphereIcon />
        </IconButton>
        <IconButton
          className={classes.shapeBtn}
          onClick={() => {
            addShape("database", "Database");
          }}
        >
          <DatabaseIcon />
        </IconButton>
      </Drawer>
      {props.children}
    </div>
  );
};
// ----------------------------
