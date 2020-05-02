import React from "react";
import { Grid } from "@material-ui/core";
import Square from "./Square";
import { makeStyles } from "@material-ui/core/styles";
import ControlBar from "./ControlBar";

const useStyles = makeStyles({
  board: {
    // flexShrink: 5
  },
});

const Board = (props) => {
  const { ...otherProps } = props;
  const classes = useStyles();

  return (
    <Grid container direction="column" aligntems="flex-start" spacing={4} className={classes.board} {...otherProps}>
      <Grid item>
        <ControlBar />
      </Grid>
      {[0, 3, 6].map((r) => (
        <Grid item key={r}>
          <Grid container spacing={4}>
            {[0, 1, 2].map((c) => (
              <Grid item key={c}>
                <Square square={r + c} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;
