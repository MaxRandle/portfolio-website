import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Divider, Link, Fab, Box } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import materialUiLogo from "../material-ui-logo.svg";

import maxRandleAvatar from "../portrate-max-randle.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2, 0, 0, 0),
  },
  section: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  logo: {
    height: 80,
  },
  center: {
    textAlign: "center",
  },
  avatar: {
    borderRadius: "50%",
    height: "18em",
  },
  title: {
    lineHeight: "80px",
  },
  extendedFab: {
    marginLeft: theme.spacing(1),
  },
}));

const IntroPage = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.container}>
      <Typography className={clsx(classes.section, classes.title, classes.center)} color="inherit" variant="h1">
        Max Randle
      </Typography>

      <Typography className={clsx(classes.section, classes.center)}>
        Hi, I'm max, a talented software developer with a diverse skillset. I have professional experience in front-end
        web development and software automation, but i come from a much broader coding background which when coupled
        with an innate curiosity and desire to learn, has lead me to take on projects in other fields such as AI,
        machine learning, and API development.
      </Typography>

      <Box className={clsx(classes.section, classes.center)}>
        <img className={clsx(classes.avatar)} src={maxRandleAvatar} alt="portrate" />
      </Box>

      <Divider className={clsx(classes.section)} />

      <Box className={clsx(classes.section, classes.center)}>
        <Fab variant="extended" color="primary" onClick={() => history.push("/nav")}>
          <Typography className={classes.extendedFab}>Enter</Typography>
          <NavigateNextIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default IntroPage;
