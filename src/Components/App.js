import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IntroPage from "./IntroPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import SideMenu from "./SideMenu";
import MenuButton from "./MenuButton";
import NavPage from "./NavPage";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import ProjectRoute from "./ProjectRoute";
import QualificationsPage from "./QualificationsPage";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  navPageContainer: {
    padding: theme.spacing(6)
  },
  introPageContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
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
    <Router>
      <Route
        path="/intro"
        component={() => (
          <Container className={classes.introPageContainer} maxWidth="sm">
            <IntroPage />
          </Container>
        )}
      />

      <Route
        path="/nav"
        component={() => (
          <>
            <NavBar />
            <SideMenu />
            <ShoppingCart />
            <Container className={classes.pageContainer} maxWidth="md">
              <NavPage />
            </Container>
          </>
        )}
      />

      <Route
        path="/projects"
        component={() => (
          <>
            <NavBar />
            <SideMenu />
            <ShoppingCart />
            <Container className={classes.pageContainer} maxWidth="md">
              <ProjectRoute />
            </Container>
          </>
        )}
      ></Route>

      <Route
        path="/skills"
        component={() => (
          <>
            <NavBar />
            <SideMenu />
            <ShoppingCart />
            <Container className={classes.pageContainer} maxWidth="md">
              <SkillsPage />
            </Container>
          </>
        )}
      ></Route>

      <Route
        path="/qualifications"
        component={() => (
          <>
            <NavBar />
            <SideMenu />
            <ShoppingCart />
            <Container className={classes.pageContainer} maxWidth="md">
              <QualificationsPage />
            </Container>
          </>
        )}
      ></Route>

      <Route path="/" component={() => <Redirect to="/intro" />} exact />
    </Router>
  );
}

export default App;
