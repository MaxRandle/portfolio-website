import React, { useState } from "react";
import { Grid, Container, Typography, Box, Fab, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import clsx from "clsx";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 0, 0, 0),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  flexGrow: {
    flexGrow: "1",
  },
  displayFlex: {
    display: "flex",
  },
}));

const ShoppingCartProject = () => {
  const classes = useStyles();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Box className={classes.container}>
      <ShoppingCart open={cartOpen} onClose={() => setCartOpen(false)} />

      <Box className={clsx(classes.section, classes.displayFlex)}>
        <Typography variant="h3" className={classes.flexGrow}>
          Online Store
        </Typography>

        <Tooltip title="View Cart">
          <Fab onClick={() => setCartOpen(true)}>
            <ShoppingCartIcon />
          </Fab>
        </Tooltip>
      </Box>

      <ProductList className={classes.section} />
    </Box>
  );
};

export default ShoppingCartProject;
