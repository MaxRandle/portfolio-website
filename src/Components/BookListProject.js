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
  Tooltip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { BookListContext } from "../contexts/BookListContext";
import BookForm from "./BookForm";
import react_logo from "../react-logo.svg";

const useStyles = makeStyles(theme => ({
  logo: {
    height: "120px",
    float: "left",
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  center: {
    textAlign: "center"
  }
}));

const ReactSkill = props => {
  const classes = useStyles();
  const { BookList, dispatch } = useContext(BookListContext);

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Typography variant="h3">Book List</Typography>
      </Grid>

      <Grid item>
        <Typography>
          Welcome to my book list, you can add books using the floating action button below, update books on the fly,
          and delete books as you please. Dont forget to try refreshing the page!
        </Typography>
      </Grid>

      <Grid item className={classes.center}>
        <Tooltip title="Add Book">
          <Fab onClick={() => dispatch({ type: "create" })} color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Grid>

      <Grid item>
        <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={2}>
          {BookList.map(e => (
            <Grid item key={e.id}>
              <BookForm id={e.id} data={e.data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReactSkill;
