// -----------------------------
// File: MapCanvas.js
// Author: Paulo Bruno B. Corá
// Date: 09/03/2021
// Brief: Memo Mapper Canvas Screen
// ----------------------------

// ----------------------------
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
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
  const [balloons, setBalloons] = useState([
    {
      value: "Ballon!",
      uuid: "123",
      coordinates: { x: 0, y: 0 },
    },
    {
      value: "Ballon!",
      uuid: "123",
      coordinates: { x: 0, y: 0 },
    },
    {
      value: "Ballon!",
      uuid: "123",
      coordinates: { x: 0, y: 0 },
    },
    {
      value: "Ballon!",
      uuid: "123",
      coordinates: { x: 0, y: 0 },
    },
    {
      value: "Ballon!",
      uuid: "123",
      coordinates: { x: 0, y: 0 },
    },
    {
      value: "Ballon!",
      uuid: "123",
      coordinates: { x: 0, y: 0 },
    },
    {
      value: "Ballon!",
      uuid: "123",
      coordinates: { x: 0, y: 0 },
    },
  ]);

  return (
    <div className={classes.canvas}>
      <Grid container spacing={3}>
        {balloons.map((balloon) => (
          <Grid item xs={2}>
            <Balloon value={balloon.value} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
// ----------------------------
