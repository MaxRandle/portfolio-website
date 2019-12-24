import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Index.scss";
import purple from "@material-ui/core/colors/purple";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
