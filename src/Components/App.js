import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IntroPage from "./IntroPage";
import SkillsPage from "./SkillsPage";
import SideMenu from "./SideMenu";
import NavPage from "./NavPage";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import ProjectRoute from "./ProjectRoute";
import QualificationsPage from "./QualificationsPage";
import ExperiencePage from "./ExperiencePage";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  navPageContainer: {
    padding: theme.spacing(6),
  },
  introPageContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  fab: {
    offset: "60px",
    position: "fixed",
    left: "0",
    bottom: "0",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Route
        path="/intro"
        component={() => (
          <Container disableGutters maxWidth="sm">
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
            <Container disableGutters maxWidth="sm">
              <NavPage />
            </Container>
          </>
        )}
      />

      <Route path="/projects" component={() => <ProjectRoute />} />

      <Route
        path="/skills"
        component={() => (
          <>
            <NavBar />
            <SideMenu />
            <Container maxWidth="md">
              <SkillsPage />
            </Container>
          </>
        )}
      />

      <Route
        path="/experience"
        component={() => (
          <>
            <NavBar />
            <SideMenu />
            <Container maxWidth="md">
              <ExperiencePage />
            </Container>
          </>
        )}
      />

      <Route
        path="/qualifications"
        component={() => (
          <>
            <NavBar />
            <SideMenu />
            <Container maxWidth="md">
              <QualificationsPage />
            </Container>
          </>
        )}
      />

      <Route path="/" component={() => <Redirect to="/intro" />} exact />
    </Router>
  );
}

export default App;
