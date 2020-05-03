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
  Tooltip,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { BookListContext } from "../contexts/BookListContext";
import BookForm from "./BookForm";
import react_logo from "../react-logo.svg";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 0, 0, 0),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  center: {
    textAlign: "center",
  },
}));

const ReactSkill = (props) => {
  const classes = useStyles();
  const { BookList, dispatch } = useContext(BookListContext);

  return (
    <Box className={classes.container}>
      <Typography variant="h3" className={classes.section}>
        Book List
      </Typography>

      <Typography className={classes.section}>
        Welcome to my book list, you can add books using the floating action button below, update books on the fly, and
        delete books as you please. Dont forget to try refreshing the page!
      </Typography>

      <Box className={clsx(classes.section, classes.center)}>
        <Tooltip title="Add Book">
          <Fab onClick={() => dispatch({ type: "create" })} color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
        className={classes.section}
      >
        {BookList.map((e) => (
          <Grid item key={e.id}>
            <BookForm id={e.id} data={e.data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReactSkill;
