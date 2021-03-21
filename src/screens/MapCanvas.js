// -----------------------------
// File: MapCanvas.js
// Author: Paulo Bruno B. Corá
// Date: 09/03/2021
// Brief: Memo Mapper Canvas Screen
// ----------------------------

// ----------------------------
import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Balloon } from "../components";
// ----------------------------

// ----------------------------
const useStyles = makeStyles((theme) => ({
  canvas: {
    marginLeft: 100,
    width: "90%",
    marginTop: 100,
  },
}));
// ----------------------------

// ----------------------------
export const MapCanvas = (props) => {
  const classes = useStyles();
  const balloons = useSelector((state) => state.balloons);

  return (
    <div className={classes.canvas}>
      <Grid container spacing={3}>
        {balloons.balloonList.map((balloon) => (
          <Grid item xs={2}>
            <Balloon content={balloon.content} shape={balloon.shape} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
// ----------------------------
