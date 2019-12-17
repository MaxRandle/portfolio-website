import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import react_logo from "../react-logo.svg";
import material_ui_logo from "../material-ui-logo.svg";
import github_logo from "../github-square-brands.svg";
import linkedin_logo from "../linkedin-brands.svg";
import max_randle_avatar from "../portrate-max-randle.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Divider, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  logo: {
    height: 80
  },
  center: {
    textAlign: "center"
  },
  block: {
    margin: theme.spacing(3)
  },
  avatar: {
    borderRadius: "50%",
    height: "18em"
  },
  divider: {
    backgroundColor: "white"
  },
  wide: {
    width: "100%"
  },
  title: {
    lineHeight: "45px"
  }
}));

const HomePage = props => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Typography className={classes.center} variant="h1">
          Max Randle
        </Typography>
      </Grid>

      <Grid item>
        <Typography className={classes.center}>
          I am a talented software developer with a diverse skillset and professional experience in front-end
          programming, back-end programming, and software automation. Blaah Blaah Blaah hard sell hard sell HARD SELL
          HARD AS FUCK SELL.
        </Typography>
      </Grid>

      <Grid item className={classes.center}>
        <img className={classes.avatar} src={max_randle_avatar} alt="linkedin logo" />
      </Grid>

      <Grid item>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item>
            <a href="https://github.com/MaxRandle" target="_blank">
              <img className={classes.logo} src={github_logo} alt="github logo" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.linkedin.com/in/max-randle-a79760160/" target="_blank">
              <img className={classes.logo} src={linkedin_logo} alt="linkedin logo" />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Divider className={classes.divider} variant="middle" />
      </Grid>

      <Grid item>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item>
            <Typography>
              <Link onClick={() => history.push("/projects")}>Projects</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link onClick={() => history.push("/skills")}>Skills</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link onClick={() => history.push("/experience")}>Experience</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
