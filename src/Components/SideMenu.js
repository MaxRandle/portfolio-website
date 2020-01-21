import React, { useContext } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppStateContext } from "../contexts/AppStateContext";

const SideMenu = props => {
  const history = useHistory();
  const [appState, setAppState] = useContext(AppStateContext);

  return (
    <Drawer anchor="left" open={appState.menuOpen} onClose={() => setAppState({ ...appState, menuOpen: false })}>
      <List>
        <ListItem button onClick={() => history.push("/")}>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => history.push("/projects")}>
          <ListItemText primary="Projects" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => history.push("/skills")}>
          <ListItemText primary="Skills" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => history.push("/experience")}>
          <ListItemText primary="Experience" />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default SideMenu;
