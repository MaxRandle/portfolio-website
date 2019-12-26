import React, { useState, useContext } from "react";
import { Grid, Card, CardContent, TextField, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { BookListContext } from "../contexts/BookListContext";

const BookForm = props => {
  const [BookList, dispatch] = useContext(BookListContext);
  const { id, data } = props;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <TextField
              label="Title"
              fullWidth
              onChange={event => dispatch({ type: "update", id: id, data: { title: event.target.value } })}
              value={data.title}
            />
          </Grid>
          <Grid item md={5} xs={10}>
            <TextField
              label="Author"
              fullWidth
              onChange={event => dispatch({ type: "update", id: id, data: { author: event.target.value } })}
              value={data.author}
            />
          </Grid>
          <Grid item md={1} xs={2}>
            <IconButton onClick={() => dispatch({ type: "delete", id: id })}>
              <DeleteIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BookForm;
