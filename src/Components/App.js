import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

//import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          component={() => (
            <Container className={classes.pageContainer} maxWidth="sm">
              <HomePage />
            </Container>
          )}
          exact
        />
        <Route
          path="/projects"
          component={() => (
            <Container className={classes.pageContainer} maxWidth="md">
              <ProjectsPage />
            </Container>
          )}
          exact
        />
        <Route
          path="/skills"
          component={() => (
            <Container className={classes.pageContainer} maxWidth="md">
              <SkillsPage />
            </Container>
          )}
          exact
        />
      </Router>
    </div>
  );
}

export default App;
