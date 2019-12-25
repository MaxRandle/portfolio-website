import React, { useState } from "react";
import { Grid, Card, CardHeader, CardContent, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({}));

const Page = props => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Card>
          <CardContent>
            <Typography>
              One of my greatest passions is machine learning. It is a truly mind blowing phenomenon and it is one of
              the few absolute certainties about future technology. Simple machine learning models are conceptually easy
              to understand and can be experimented with using only a few lines of code with the help of a machine
              learning library like Python Keras.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Neural Network from scratch" />
          <Divider />

          <CardContent>
            <Typography>
              Neural networks are universal function approximators. This means that given enough high quality training
              data, a neural network can be used to approximate ANY function.
              <a href="https://github.com/MaxRandle/neural-network-py">This github repository</a> contains a neural
              network that I built from scratch using only NumPy matrix multiplication as a basis for constructing the
              model. The model consists of a configurable number of densely connected layers, each one containing a
              configurable number of nodes. Each layer can have either ReLu or sigmoid as its activation function, the
              output layer uses softmax for classification problems. For training, the model uses gradient descent as
              its optimisation algorithm and backpropogation to update the weight matrix at each layer.
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography>Simplified math behind the training algorithm in pseudocode:</Typography>
            <pre>
              <code>{pseudocodeString}</code>
            </pre>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;

const pseudocodeString = `the .* operator represents element-wise multiplication of two matricies
the * operator represents matrix or scalar multiplication
w[n] represents the weight matrix at layer n
b[n] represents the bias matrix at layer n
a[n] represents the activation matrix at layer n
g(z) represents the activation function applied element-wise to the matrix z
x is input data
y is expected output
m.T represents the transpose of matrix m 
alpha is the learning rate

// feedforward
// a[0] is the input matrix, a[n] is the output matrix

a[0] = x
for n in  (0 -> number_of_layers) {
    z = w[n] * a[n-1] + b[n]
    a[n] = g(z)
}

// backpropogation
// we do not wish to adjust layer 0 as this is the input layer

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
