import React, { useState, useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  logo: {
    height: 80,
  },
  center: {
    textAlign: "center",
  },
  title: {
    lineHeight: "80px",
  },
}));

const Page = (props) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container)}>
      <Typography variant="h3" className={classes.section}>
        Qualifications
      </Typography>

      <Card className={classes.section}>
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

      <Card className={classes.section}>
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
    </Box>
  );
};

export default Page;
