import React, { useState, useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import reactLogo from "../react-logo.svg";
import uiLogo from "../ui-vector-logo.svg";
import nodeLogo from "../nodejs-seeklogo.com.svg";
import pythonLogo from "../Python-logo.svg";
import javaScriptLogo from "../JavaScript-logo.svg";
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
  title: {
    lineHeight: "80px",
  },
  logo: {
    height: "120px",
    float: "left",
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const ReactSkill = (props) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container)}>
      <Typography className={clsx(classes.section)} variant="h3">
        Skills
      </Typography>

      <Box className={clsx(classes.section)}>
        <img className={classes.logo} src={javaScriptLogo} alt="JavaScript logo" />
        <Typography>
          JavaScript is my most used language. I have used it for front-end, back-end, automation, AI, and as a
          glorified calculator. The languages has many features that I love, such as the array methods map, filter,
          reduce, etc... Aditionally the ES6 syntax has many super useful features which make other languages feel
          incomplete. Additionally, as a result of the popularity of JavaScript, there are many packages available which
          further improve the experience of using the language.
        </Typography>
      </Box>

      <Box className={clsx(classes.section)}>
        <img className={classes.logo} src={reactLogo} alt="react logo" />
        <Typography>
          React is my go-to for any front end web task. Its powerful and versatile, when used properly React can produce
          some very snappy, scalable, and responsive web applications. For these reasons, React has become a very
          popular framework and therefore there is a huge knowlegebase and lot of support and documentation. React can
          also make use of Material-ui, a popular component and styling library based on googles industry leading
          material-design style guide, which is how I built this website!
        </Typography>
      </Box>

      <Box className={clsx(classes.section)}>
        <img className={classes.logo} src={nodeLogo} alt="NodeJS logo" />
        <Typography>
          I have used NodeJS for many projects including such as building simple webservers and REST API's, and building
          CRUD controllers over a database. I have also become familiar with ExpressJS and MongoDB which when used
          together is a popular stack for building lightweight web applications. My usage of these technologies was to
          expand the functionality of an existing API by building a server which would retrieve data from the API every
          2 hours and then store the data in a database. I then added some endpoints so that the data could be requested
          in a wider variaty of ways and in a more useful format.
        </Typography>
      </Box>

      <Box className={clsx(classes.section)}>
        <img className={classes.logo} src={uiLogo} alt="uipath logo" />
        <Typography>
          UiPath is a software tool used for robotic process automation. It has a wide range of utilities capable of
          automating almost any task that a human is able to perform. The limitations of this type of automation are
          tasks that require a judgement call to be made. Automation using UiPath requires knowlege of how desktop and
          web applications function at a sub-interface level. Business processes can often be re-engineered into more
          reliable and faster processes if the developer has the right knowlege of the target applications and systems.
          Aditional fundemental knowlege required to be proficient at this type of automation includes .NET, office,
          SQL/database structure, and how to use API's where they are available. I have used UiPath to create software
          robots that can either assist with, or completely take over a business process from manual workers.
        </Typography>
      </Box>

      <Box className={clsx(classes.section)}>
        <img className={classes.logo} src={pythonLogo} alt="Python logo" />
        <Typography>
          I have used Python extensively throughout my time studying computer science. It was taught in the first year
          and has been used to the majority of courses in my degree, many assignments and projects were set in Python.
          Now days I have found success using python for data science and machine learning as a hobbyist.
        </Typography>
      </Box>
    </Box>
  );
};

export default ReactSkill;

/*

    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={6}>
      <Grid item>
        <Typography variant="h3">Skills</Typography>
      </Grid>

      <Grid item>
        <img className={classes.logo} src={javaScriptLogo} alt="JavaScript logo" />
        <Typography className={classes.details}>
          JavaScript is my most used language. I have used it for front-end, back-end, automation, AI, and as a
          glorified calculator. The languages has many features that I love, such as the array methods map, filter,
          reduce, etc... Aditionally the ES6 syntax has many super useful features which make other languages feel
          incomplete. Additionally, as a result of the popularity of JavaScript, there are many packages available which
          further improve the experience of using the language.
        </Typography>
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
          I have used NodeJS for many projects including such as building simple webservers and REST API's, and building
          CRUD controllers over a database. I have also become familiar with ExpressJS and MongoDB which when used
          together is a popular stack for building lightweight web applications. My usage of these technologies was to
          expand the functionality of an existing API by building a server which would retrieve data from the API every
          2 hours and then store the data in a database. I then added some endpoints so that the data could be requested
          in a wider variaty of ways and in a more useful format.
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
          SQL/database structure, and how to use API's where they are available. I have used UiPath to create software
          robots that can either assist with, or completely take over a business process from manual workers.
        </Typography>
      </Grid>

      <Grid item>
        <img className={classes.logo} src={pythonLogo} alt="Python logo" />
        <Typography>
          I have used Python extensively throughout my time studying computer science. It was taught in the first year
          and has been used to the majority of courses in my degree, many assignments and projects were set in Python.
          Now days I have found success using python for data science and machine learning as a hobbyist.
        </Typography>
      </Grid>
    </Grid>

*/
