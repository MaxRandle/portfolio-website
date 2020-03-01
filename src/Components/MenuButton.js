import { Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppStateContext } from "../contexts/AppStateContext";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    left: "0"
    // bottom: "0"
  }
}));

const MenuButton = props => {
  const classes = useStyles();
  const { appState, setAppState } = useContext(AppStateContext);

  return (
    <Fab
      color="primary"
      aria-label="menu"
      className={classes.fab}
      onClick={() => setAppState({ ...appState, menuOpen: true })}
    >
      <MenuIcon />
    </Fab>
  );
};

export default MenuButton;
