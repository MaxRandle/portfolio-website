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
  ListItemText,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
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
  extendedFab: {
    marginLeft: theme.spacing(1),
  },
  link: {
    color: "white",
  },
  indent: {
    marginLeft: theme.spacing(2),
  },
  disector: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  disectorDivider: {
    flexGrow: "1",
  },
  disectorText: {
    padding: theme.spacing(0, 2, 0, 2),
  },
}));

const NavPage = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.container}>
      <Box className={clsx(classes.disector)}>
        <Divider className={classes.disectorDivider} />
        <Typography className={classes.disectorText} variant="h3">
          About
        </Typography>
        <Divider className={classes.disectorDivider} />
      </Box>

      <Container className={clsx(classes.section)}>
        <List>
          <ListItem button onClick={() => history.push("/skills")}>
            <ListItemText>Skills</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/experience")}>
            <ListItemText>Experience</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/qualifications")}>
            <ListItemText>Qualifications</ListItemText>
          </ListItem>
        </List>
      </Container>

      <Box className={clsx(classes.disector)}>
        <Divider className={classes.disectorDivider} />
        <Typography className={classes.disectorText} variant="h3">
          Projects
        </Typography>
        <Divider className={classes.disectorDivider} />
      </Box>

      <Container className={clsx(classes.section)}>
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

      <Box className={clsx(classes.disector)}>
        <Divider className={classes.disectorDivider} />
        <Typography className={classes.disectorText} variant="h3">
          External
        </Typography>
        <Divider className={classes.disectorDivider} />
      </Box>

      <Container className={clsx(classes.section)}>
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
    </Box>
  );
};

export default NavPage;
