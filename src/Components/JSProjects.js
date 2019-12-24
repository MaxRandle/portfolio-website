import React, { useState } from "react";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  iframe: {
    width: "800px",
    height: "400px"
  },
  center: {
    textAlign: "center"
  }
}));

const Page = props => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Card>
          <CardHeader title="Rain" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/_xTtmD_Wx" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Maze" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/oRiUyH7mG" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Fawkes" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/c2_q18g76" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Starfield" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/Qejijupwg" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
