// -----------------------------
// File: Balloon.js
// Author: Paulo Bruno B. Corá
// Date: 09/03/2021
// Brief: Memo Mapper App Balloon component
// ----------------------------

// ----------------------------
import { Typography, makeStyles, Input } from "@material-ui/core";
import { useState } from "react";
// ----------------------------

// ----------------------------
const useStyles = makeStyles((theme) => ({}));
// ----------------------------

// ----------------------------
export const Balloon = (props) => {
  const classes = useStyles();
  const [balloonValue, setBalloonValue] = useState("");

  return (
    <div>
      <Input
        onChange={(event) => {
          console.log(event.target.value);
        }}
      >
        Balloon!
      </Input>
    </div>
  );
};
// ----------------------------
