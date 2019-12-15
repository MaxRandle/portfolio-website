import React, { useState } from "react";
import react_logo from "../react-logo.svg";
import material_ui_logo from "../material-ui-logo.svg";
import github_logo from "../github-square-brands.svg";
import linkedin_logo from "../linkedin-brands.svg";
import max_randle_avatar from "../portrate-max-randle.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid, Divider } from "@material-ui/core";
import { textAlign } from "@material-ui/system";

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
  }
}));

const HomePage = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3}>
        <Grid item className={classes.wide}>
          <Typography className={classes.center} variant="h1">
            Max Randle
          </Typography>
        </Grid>

        <Grid item className={classes.wide}>
          <Typography className={classes.center}>
            I am a talented software developer with a diverse skillset and professional experience in front-end
            programming, back-end programming, and software automation. Blaah Blaah Blaah hard sell hard sell HARD SELL
            HARD AS FUCK SELL.
          </Typography>
        </Grid>

        <Grid item className={`${classes.wide} ${classes.center}`}>
          <img className={classes.avatar} src={max_randle_avatar} alt="linkedin logo" />
        </Grid>

        <Grid item className={classes.wide}>
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

        <Grid item className={classes.wide}>
          <Divider className={classes.divider} variant="middle" />
        </Grid>

        <Grid item className={classes.wide}>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item>
              <Typography>Projects</Typography>
            </Grid>
            <Grid item>
              <Typography>Skills</Typography>
            </Grid>
            <Grid item>
              <Typography>Experience</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
