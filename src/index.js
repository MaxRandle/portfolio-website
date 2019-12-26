import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./Index.scss";
import purple from "@material-ui/core/colors/purple";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import BookListContextProvider from "./contexts/BookListContext";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: purple[400]
    },
    secondary: {
      main: purple[400]
    }
  },
  overrides: {
    MuiCardContent: {
      root: {
        paddingBottom: "16px"
      }
    }
  }
});

ReactDOM.render(
  <BookListContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BookListContextProvider>,
  document.getElementById("root")
);
