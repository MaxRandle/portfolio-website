import React, { useState } from "react";
import { Card, CardHeader, CardContent, Divider, Typography, Link, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 0, 0, 0),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
}));

const Page = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h3" className={classes.section}>
        Neural Network from scratch
      </Typography>

      <Typography variant="h5">Description: </Typography>

      <Typography className={classes.section}>
        Neural networks are universal function approximators. This means that given enough high quality training data, a
        neural network can be used to approximate ANY function.
        <br />
        <br />
        <Link color="inherit" underline="always" href="https://github.com/MaxRandle/neural-network-py">
          This github repository
        </Link>{" "}
        contains a neural network that I built from scratch using only NumPy matrix multiplication as a basis for
        constructing the model. <br />
        <br />
        The model consists of a configurable number of densely connected layers, each one containing a configurable
        number of nodes. Each layer can have either ReLu or sigmoid as its activation function, the output layer uses
        softmax for classification problems. For training, the model uses gradient descent as its optimisation algorithm
        and backpropogation to update the weight matrix at each layer.
      </Typography>

      <Box className={classes.section}>
        <Typography variant="h5">Simplified training algorithm:</Typography>
        <code>.* </code> operator represents element-wise multiplication of two matricies
        <br />
        <code>* </code> operator represents matrix or scalar multiplication
        <br />
        <code>w[n] </code> represents the weight matrix at layer n<br />
        <code>b[n] </code> represents the bias matrix at layer n<br />
        <code>a[n] </code> represents the activation matrix at layer n<br />
        <code>g(z) </code> represents the activation function applied element-wise to the matrix z<br />
        <code>x </code> is input data
        <br />
        <code>y </code> is expected output
        <br />
        <code>m.T </code> represents the transpose of matrix m <br />
        <code>alpha</code> is the learning rate
        <br />
        <code>g'(z) </code> is the derivative of function g applied to z
        <br />
        <pre>
          <code>{pseudocodeString}</code>
        </pre>
      </Box>
    </Box>
  );
};

export default Page;

const pseudocodeString = `// feedforward
a[0] = x
for n in  (0 -> number_of_layers) {
  z = w[n] * a[n-1] + b[n]
  a[n] = g(z)
}

// backpropogation
for n in (number_of_layers-1 -> 0) {
  if n === number_of_layers-1 {
    error[n] = y - a[n]
  } else{
    error[n] = w[n+1].T * error[n+1]
  }
    gradient[n] = g'(a[n]) .* error[n] * alpha
    delta[n] = gradient[n] * a[n-1].T
    w[n] += delta[n]
    b[n] += gradient[n]
}`;
