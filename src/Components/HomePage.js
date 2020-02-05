import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import material_ui_logo from "../material-ui-logo.svg";
import github_logo from "../github-square-brands.svg";
import linkedin_logo from "../linkedin-brands.svg";
import max_randle_avatar from "../portrate-max-randle.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  logo: {
    height: 80
  },
  center: {
    textAlign: "center"
  },
  avatar: {
    borderRadius: "50%",
    height: "18em"
  },
  title: {
    lineHeight: "80px"
  }
}));

const HomePage = props => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Typography color="inherit" className={`${classes.center} ${classes.title}`} variant="h1">
          Max Randle
        </Typography>
      </Grid>

      <Grid item>
        <Typography className={classes.center}>
          I am a talented software developer with a diverse skillset. I have professional experience in front-end web
          development and software automation, but i come from a much broader coding background which when coupled with
          an innate curiosity and desire to learn, has lead me to take on projects in other fields such as AI, machine
          learning, and API development.
        </Typography>
      </Grid>

      <Grid item className={classes.center}>
        <img className={classes.avatar} src={max_randle_avatar} alt="portrate" />
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
        <Divider variant="middle" />
      </Grid>

      <Grid item className={classes.white}>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item>
            <Typography>
              <Link href="/projects" color="inherit">
                Projects
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link href="/skills" color="inherit">
                Skills
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link href="/experience" color="inherit">
                Experience
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
