import React, { useState, useContext } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  CardActions,
  Fab,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import node_logo from "../nodejs-seeklogo.com.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  logo: {
    height: "120px",
    float: "left",
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const Page = props => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <img className={classes.logo} src={node_logo} alt="NodeJS logo" />
        <Typography>
          I have used NodeJS for many project including building simple webservers and REST API's. I have also become
          familiar with ExpressJS and MongoDB which when used together is a popular stack for building lightweight web
          applications. My usage of these technologies was to expand the functionality of an existing API by building a
          server which would retrieve data from the API every 2 hours and then store the data in a database. I then
          added some endpoints so that the data could be requested in a wider variaty of ways and in a more useful
          format.
        </Typography>
      </Grid>

      <Grid item>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
