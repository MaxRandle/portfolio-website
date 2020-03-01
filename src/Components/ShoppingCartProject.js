import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(3)
  }
}));

const ShoppingCartProject = () => {
  const classes = useStyles();

  return (
    <>
      <ShoppingCart />

      <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
        <Grid item>
          <Typography variant="h3">Online Store</Typography>
        </Grid>

        <Grid item>
          <ProductList />
        </Grid>
      </Grid>
    </>
  );
};

export default ShoppingCartProject;
