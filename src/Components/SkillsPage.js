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
import pythonLogo from "../Python-logo.svg";

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
  const { BookList, dispatch } = useContext(BookListContext);

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={6}>
      <Grid item>
        <Typography variant="h3">Skills</Typography>
      </Grid>

      <Grid item>
        <img className={classes.logo} src={reactLogo} alt="react logo" />
        <Typography className={classes.details}>
          React is my go-to for any front end web task. Its powerful and versatile, when used properly React can produce
          some very snappy, scalable, and responsive web applications. For these reasons, React has become a very
          popular framework and therefore there is a huge knowlegebase and lot of support and documentation. React can
          also make use of Material-ui, a popular component and styling library based on googles industry leading
          material-design style guide, which is how I built this website!
        </Typography>
      </Grid>

      <Grid item>
        <img className={classes.logo} src={nodeLogo} alt="NodeJS logo" />
        <Typography>
          This application is being hosted by a Node webserver running Express.js! I have used NodeJS for many project
          including this one such as building simple webservers and REST API's. I have also become familiar with
          ExpressJS and MongoDB which when used together is a popular stack for building lightweight web applications.
          My usage of these technologies was to expand the functionality of an existing API by building a server which
          would retrieve data from the API every 2 hours and then store the data in a database. I then added some
          endpoints so that the data could be requested in a wider variaty of ways and in a more useful format.
        </Typography>
      </Grid>

      <Grid item>
        <img className={classes.logo} src={uiLogo} alt="uipath logo" />
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
        <img className={classes.logo} src={pythonLogo} alt="Python logo" />
        <Typography>
          Python is the first programming language I ever learned at university so it was used in many assignments and
          projects. Now days I use python for data science and machine learning.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReactSkill;
