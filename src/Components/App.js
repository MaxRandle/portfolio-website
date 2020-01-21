import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import SideMenu from "./SideMenu";
import MenuButton from "./MenuButton";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: theme.spacing(2)
  },
  fab: {
    offset: "60px",
    position: "fixed",
    left: "0",
    bottom: "0"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Router>
        <MenuButton />
        <SideMenu />
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
    </>
  );
}

export default App;
