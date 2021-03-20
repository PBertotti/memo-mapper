// -----------------------------
// File: Menu.js
// Author: Paulo Bruno B. Corá
// Date: 09/03/2021
// Brief: Memo Mapper App Menu component
// ----------------------------

// ----------------------------
import { AppBar, Toolbar, makeStyles, Drawer, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import MemoLogo from "../assets/img/Memo_logo.svg";
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
  },
  addIcon: {
    fontSize: 36,
    color: "#FFFFFF",
  },
}));
// ----------------------------

// ----------------------------
export const Menu = (props) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <AppBar className={classes.navBar}>
        <Toolbar>
          <img src={MemoLogo} className={classes.navLogo} />
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
      </Drawer>
      {props.children}
    </div>
  );
};
// ----------------------------
