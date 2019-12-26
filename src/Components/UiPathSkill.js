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
import uipath_logo from "../uipath-vector-logo.svg";
import ui_logo from "../ui-vector-logo.svg";
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
        <img className={classes.logo} src={ui_logo} alt="uipath logo" />
        <Typography>
          UiPath is a software tool used for robotic process automation. It has a wide range of utilities capable of
          automating almost any task that a human is able to perform. The limitations of this type of automation are
          tasks that require a judgement call to be made. Automation using UiPath requires knowlege of how desktop and
          web applications function at a sub-interface level. Business processes can often be re-engineered into more
          reliable and faster processes if the developer has the right knowlege of the target applications and systems.
          Aditional fundemental knowlege required to be proficient at this type of automation includes .NET, office,
          SQL/database structure, and how to use API's where they are available.
        </Typography>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Qualifications" />
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
