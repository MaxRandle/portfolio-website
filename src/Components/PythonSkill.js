import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  CardActions,
  Fab
} from "@material-ui/core";
import python_logo from "../Python-logo.svg";
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
        <img className={classes.logo} src={python_logo} alt="Python logo" />
        <Typography>
          Python is the first programming language I ever learned at university so it was used in many assignments and
          projects. Now days I use python for data science and machine learning.
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
