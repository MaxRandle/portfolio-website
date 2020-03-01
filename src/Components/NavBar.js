import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import { AppStateContext } from "../contexts/AppStateContext";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(3)
  }
}));

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const { appState, setAppState } = useContext(AppStateContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} onClick={() => history.push("/")}>
          <HomeIcon />
        </IconButton>
        {/* <IconButton onClick={() => setAppState({ ...appState, menuOpen: true })} className={classes.menuButton}>
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          Max's Portfolio
        </Typography>
        <Tooltip title="View Cart">
          <IconButton onClick={() => setAppState({ ...appState, cartOpen: true })}>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
