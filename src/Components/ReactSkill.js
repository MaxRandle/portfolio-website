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
  Fab
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
  }
}));

const ReactSkill = props => {
  const classes = useStyles();
  const [BookList, dispatch] = useContext(BookListContext);

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <img className={classes.logo} src={react_logo} alt="react logo" />
        <Typography className={classes.details}>
          React is my go-to for any front end web task. Its powerful and versatile, when used properly React can produce
          some very snappy, scalable, and responsive web applications. For these reasons, React has become a very
          popular framework and therefore there is a huge knowlegebase and lot of support and documentation. React can
          also make use of Material-ui, a popular component and styling library built by google, which is how I built
          this website! It's all well and good to build a static, non-functional portfolio... but this is a selling
          point so let's flex a little. This is designed to demonstrate my skills in DOM manipulation and state
          management using react.
        </Typography>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Book list" />
          <Divider />
          <CardContent>
            <Typography>
              Welcome to my book list, you can add books using the floating action button below, update books on the
              fly, and delete books as you please. Dont forget to try refreshing the page!
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Grid container direction="row" justify="space-around" alignItems="center">
              <Grid item>
                <Fab onClick={() => dispatch({ type: "create" })} color="primary">
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>

      {BookList.map(e => (
        <Grid item key={e.id}>
          <BookForm id={e.id} data={e.data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReactSkill;
