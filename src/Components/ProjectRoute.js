import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NeuralNetworkProject from "./NeuralNetworkProject";
import ShoppingCartProject from "./ShoppingCartProject";
import P5Projects from "./P5Projects";
import UtttAiProject from "./UtttAiProject";
import BookListProject from "./BookListProject";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Route
        path="/projects/p5_js"
        component={() => (
          <Container>
            <P5Projects />
          </Container>
        )}
      />
      <Route
        path="/projects/shopping_cart"
        component={() => (
          <Container>
            <ShoppingCartProject />
          </Container>
        )}
      />
      <Route
        path="/projects/neural_network"
        component={() => (
          <Container>
            <NeuralNetworkProject />
          </Container>
        )}
      />
      <Route path="/projects/uttt_ai" component={() => <UtttAiProject />} />
      <Route
        path="/projects/book_list"
        component={() => (
          <Container>
            <BookListProject />
          </Container>
        )}
      />
      <Route path="/projects/" component={() => <Redirect to="/nav" />} exact />
    </Router>
  );
}

export default App;
