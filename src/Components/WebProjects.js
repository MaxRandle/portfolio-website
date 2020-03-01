import React, { useState } from "react";
import { Grid, Card, CardHeader, CardContent, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  iframe: {
    width: "100%",
    height: "500px"
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
        <Typography variant="h3">Web Projects</Typography>
      </Grid>

      <Grid item>
        <Typography>
          Front end projects that I built while I was learning how to implement key functions of webapps including
          managing state and fetching data.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
