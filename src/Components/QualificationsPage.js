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
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { BookListContext } from "../contexts/BookListContext";
import BookForm from "./BookForm";
import reactLogo from "../react-logo.svg";
import uiLogo from "../ui-vector-logo.svg";
import nodeLogo from "../nodejs-seeklogo.com.svg";

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
  const { BookList, dispatch } = useContext(BookListContext);

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={6}>
      <Grid item>
        <Typography variant="h3">Qualifications</Typography>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Bachelor of Science - Major in Computer Science - University of Auckland" />
          <Divider />
          <CardContent>
            <Typography variant="h6">Notable papers:</Typography>
            <List dense={true}>
              <ListItem>
                <ListItemText primary="Applied Algorithms" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Distributed Objects, Services and Programming" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Operating Systems" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Human Computer Interaction" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Fundamentals of Database Systems" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Atrificial Intelligence" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Computer Graphics and Image Processing" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="UiPath" />
          <Divider />
          <List>
            <ListItem>
              <ListItemText
                primary="Advanced Developer Training Course"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      UiPath Training Academy
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="UiPath Expert Developer Certification"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      UiPath Certification Exam
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
