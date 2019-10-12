import React, { useState } from "react";
import react_logo from "./react-logo.svg";
import material_ui_logo from "./material-ui-logo.svg";
import github_logo from "./github-square-brands.svg";
import linkedin_logo from "./linkedin-brands.svg";
import max_randle_avatar from "./portrate-max-randle.jpg";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { textAlign } from "@material-ui/system";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  logo: {
    height: 80
  },
  nameTitle: {
    textAlign: "center"
    // lineHeight: "100%"
  },
  bio: {
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
  }
}));

const HomePage = props => {
  const classes = useStyles();
  return (
    <Box>
      <Container className={classes.block}>
        <Typography className={classes.nameTitle} variant="h1">
          Max Randle
        </Typography>
      </Container>

      <Container className={classes.block}>
        <Typography className={classes.bio}>
          I am a talented software developer with a diverse skillset and professional experience in front-end
          programming, back-end programming, and software automation. Blaah Blaah Blaah hard sell hard sell HARD SELL
          HARD AS FUCK SELL.
        </Typography>
      </Container>

      <Container className={classes.block}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={6}>
          <Grid item>
            <img className={classes.avatar} src={max_randle_avatar} alt="linkedin logo" />
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.block}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={6}>
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
      </Container>

      <Container className={classes.block}>
        <Divider className={classes.divider} variant="middle" />
      </Container>

      <Container className={classes.block}>
        <Grid container irection="row" justify="center" alignItems="center" spacing={6}>
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
      </Container>
    </Box>
  );
};

export default HomePage;
