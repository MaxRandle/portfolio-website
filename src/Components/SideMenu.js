import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Link } from "@material-ui/core";
// import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const SideMenu = props => {
  // const history = useHistory();
  const [open, setOpen] = useState(true);

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <List>
        <ListItem button>
          {/* <ListItem button onClick={() => history.push("/")}> */}
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Projects" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Skills" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Experience" />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default SideMenu;
