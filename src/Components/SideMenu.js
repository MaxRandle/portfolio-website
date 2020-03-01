import React, { useContext } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Link, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppStateContext } from "../contexts/AppStateContext";

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: "bold"
  }
}));

const SideMenu = props => {
  const history = useHistory();
  const classes = useStyles();
  const { appState, setAppState } = useContext(AppStateContext);

  return (
    <Drawer anchor="left" open={appState.menuOpen} onClose={() => setAppState({ ...appState, menuOpen: false })}>
      <List>
        <ListItem>
          <Typography color="secondary" className={classes.header} variant="body1">
            Max Randle Portfolio Website
          </Typography>
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            setAppState({ ...appState, menuOpen: false });
            history.push("/intro");
          }}
        >
          <ListItemText primary="Intro" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setAppState({ ...appState, menuOpen: false });
            history.push("/projects");
          }}
        >
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setAppState({ ...appState, menuOpen: false });
            history.push("/skills");
          }}
        >
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setAppState({ ...appState, menuOpen: false });
            history.push("/experience");
          }}
        >
          <ListItemText primary="Experience" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
