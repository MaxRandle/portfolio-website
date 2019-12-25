import React, { useState } from "react";
import { Grid, Card, CardHeader, CardContent, Divider, Typography } from "@material-ui/core";
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
          <CardContent>
            <Typography>
              Some of my first ever JavaScript projects, built while I was still studying. These projects were built
              using the P5.js library and following tutorials by Coding Train - Daniel Shiffman
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Rain" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/_xTtmD_Wx" />
          </CardContent>
          <Divider />
          <CardContent>
            <Typography>
              This was one of the first projects I ever undertook using JavaScript. It helped to develop my
              understanding of how the language feels and functions as a pure programming language. Using the P5.js
              library I was able to build creative and visual projects without having knowlege of how to use JavaScript
              to manipulate the DOM.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Maze" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/oRiUyH7mG" />
          </CardContent>
          <Divider />
          <CardContent>
            <Typography>
              This project was the start of what would later become an obsession with visualising algorithms. This
              program creates a solvable maze by treating the grid as a graph and performing a Depth-First-Search. I
              like this project for its simplicity and it shows clearly how the algorithm works.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Fawkes" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/c2_q18g76" />
          </CardContent>
          <Divider />
          <CardContent>
            <Typography>
              In this project I experimented with user interaction by listening for mouse events. It also involves the
              use physics engine programming. Constant acceleration due to gravity is implemented here and simple
              kinematics are used to calculate the initial velocity of the shell so that the maximum height achieved by
              the shell perfectly reaches the point where the mouse was clicked before exploding.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Starfield" />
          <CardContent className={classes.center}>
            <iframe className={classes.iframe} src="https://editor.p5js.org/MaxRandle/embed/Qejijupwg" />
          </CardContent>
          <Divider />
          <CardContent>
            <Typography>
              My personal favourite P5.js project. This project works by adjusting object speed and size to emulate a
              z-axis and paralax.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
