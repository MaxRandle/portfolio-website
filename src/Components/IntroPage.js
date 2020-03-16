import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Divider, Link, Fab } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";

import materialUiLogo from "../material-ui-logo.svg";

import maxRandleAvatar from "../portrate-max-randle.jpg";

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
  },
  extendedFab: {
    marginLeft: theme.spacing(1)
  }
}));

const IntroPage = props => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Typography color="inherit" className={`${classes.center} ${classes.title}`} variant="h1">
          Max Randle
        </Typography>
      </Grid>

      <Grid item>
        <Typography className={classes.center}>
          Hi, I'm max, a talented software developer with a diverse skillset. I have professional experience in
          front-end web development and software automation, but i come from a much broader coding background which when
          coupled with an innate curiosity and desire to learn, has lead me to take on projects in other fields such as
          AI, machine learning, and API development.
        </Typography>
      </Grid>

      <Grid item className={classes.center}>
        <img className={classes.avatar} src={maxRandleAvatar} alt="portrate" />
      </Grid>

      <Grid item>
        <Divider variant="middle" />
      </Grid>

      <Grid item className={classes.center}>
        <Fab variant="extended" color="primary" onClick={() => history.push("/nav")}>
          <Typography className={classes.extendedFab}>Enter</Typography>
          <NavigateNextIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default IntroPage;
