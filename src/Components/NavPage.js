import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Grid,
  Divider,
  Link,
  Container,
  Fab,
  Tooltip,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SideMenu from "./SideMenu";
import NavBar from "./NavBar";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPageOld";
import githubLogo from "../github-square-brands.svg";
import linkedinLogo from "../linkedin-brands.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: theme.spacing(2)
  },
  logo: {
    height: 80
  },
  center: {
    textAlign: "center"
  },
  avatar: {
    borderRadius: "50%",
    height: "18em"
  },
  title: {
    lineHeight: "80px"
  },
  extendedFab: {
    marginLeft: theme.spacing(1)
  },
  indentedList: {
    marginLeft: theme.spacing(4)
  }
}));

const NavPage = props => {
  const classes = useStyles();
  const history = useHistory();

  const Projects = () => (
    <>
      <Typography variant="h3">Projects</Typography>
      <Container maxWidth="md">
        <List>
          <ListItem button onClick={() => history.push("/projects/p5_js")}>
            <ListItemText>P5.js</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/projects/neural_network")}>
            <ListItemText>Neural Network</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/projects/uttt_ai")}>
            <ListItemText>UTTT AI</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/projects/book_list")}>
            <ListItemText>Book List</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/projects/shopping_cart")}>
            <ListItemText>Shopping Cart</ListItemText>
          </ListItem>
        </List>
      </Container>
    </>
  );

  const External = () => (
    <>
      <Typography variant="h3">External</Typography>
      <Container maxWidth="md">
        <List>
          <ListItem button onClick={() => window.open("https://github.com/MaxRandle")}>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText>Github</ListItemText>
          </ListItem>
          <ListItem button onClick={() => window.open("https://www.linkedin.com/in/max-randle-a79760160/")}>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText>Linkedin</ListItemText>
          </ListItem>
        </List>
      </Container>
    </>
  );

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={6}>
      <Grid item>
        <Link variant="h3" component="button" onClick={() => history.push("/skills")}>
          Skills
        </Link>
      </Grid>

      <Grid item>
        <Link variant="h3" component="button" onClick={() => history.push("/experience")}>
          Eperience
        </Link>
      </Grid>

      <Grid item>
        <Link variant="h3" component="button" onClick={() => history.push("/qualifications")}>
          Qualifications
        </Link>
      </Grid>

      <Grid item>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Projects />
          </Grid>

          <Grid item sm={6} xs={12}>
            <External />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavPage;

/* <Grid item>
            <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={2}>
              <Grid item>
                <Fab variant="extended" color="secondary" onClick={() => history.push("/projects/p5_js")}>
                  <Typography className={classes.extendedFab}>P5.js</Typography>
                  <NavigateNextIcon />
                </Fab>
              </Grid>
              <Grid item>
                <Fab variant="extended" color="secondary" onClick={() => history.push("/projects/neural_network")}>
                  <Typography className={classes.extendedFab}>Neural Network</Typography>
                  <NavigateNextIcon />
                </Fab>
              </Grid>
              <Grid item>
                <Fab variant="extended" color="secondary" onClick={() => history.push("/projects/uttt_ai")}>
                  <Typography className={classes.extendedFab}>UTTT AI</Typography>
                  <NavigateNextIcon />
                </Fab>
              </Grid>
              <Grid item>
                <Fab variant="extended" color="secondary" onClick={() => history.push("/projects/book_list")}>
                  <Typography className={classes.extendedFab}>Book List</Typography>
                  <NavigateNextIcon />
                </Fab>
              </Grid>
              <Grid item>
                <Fab variant="extended" color="secondary" onClick={() => history.push("/projects/shopping_cart")}>
                  <Typography className={classes.extendedFab}>Shopping Cart</Typography>
                  <NavigateNextIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid> */

/* <Grid container direction="row" justify="flex-start" alignItems="center" spacing={6}>
              <Grid item>
                <Tooltip title="Github">
                  <a href="https://github.com/MaxRandle" target="_blank">
                    <img className={classes.logo} src={githubLogo} alt="github logo" />
                  </a>
                </Tooltip>
              </Grid>

              <Grid item>
                <Tooltip title="Linkedin">
                  <a href="https://www.linkedin.com/in/max-randle-a79760160/" target="_blank">
                    <img className={classes.logo} src={linkedinLogo} alt="linkedin logo" />
                  </a>
                </Tooltip>
              </Grid>
            </Grid> */
