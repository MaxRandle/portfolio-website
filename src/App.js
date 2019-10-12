import React, { useState } from "react";
import "./App.scss";
import HomePage from "./HomePage";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
//import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();
  const [pageIndex, setPageIndex] = useState(0);
  const page = [<HomePage />][pageIndex];

  return (
    <div className="App">
      <Container className={classes.pageContainer} maxWidth="md">
        {page}
      </Container>
    </div>
  );
}

export default App;
