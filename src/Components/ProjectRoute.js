import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NeuralNetworkProject from "./NeuralNetworkProject";
import ShoppingCartProject from "./ShoppingCartProject";
import P5Projects from "./P5Projects";
import UtttAiProject from "./UtttAiProject";
import BookListProject from "./BookListProject";

function App() {
  return (
    <Router>
      <Route path="/projects/p5_js" component={() => <P5Projects />} />
      <Route path="/projects/shopping_cart" component={() => <ShoppingCartProject />} />
      <Route path="/projects/neural_network" component={() => <NeuralNetworkProject />} />
      <Route path="/projects/uttt_ai" component={() => <UtttAiProject />} />
      <Route path="/projects/book_list" component={() => <BookListProject />} />
      <Route path="/projects/" component={() => <Redirect to="/nav" />} exact />
    </Router>
  );
}

export default App;
