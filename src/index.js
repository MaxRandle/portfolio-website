import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./Index.scss";
import purple from "@material-ui/core/colors/purple";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import BookListContextProvider from "./contexts/BookListContext";
import AppStateContextProvider from "./contexts/AppStateContext";
import BoardStateContextProvider from "./contexts/BoardStateContext";

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
    <BoardStateContextProvider>
      <AppStateContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AppStateContextProvider>
    </BoardStateContextProvider>
  </BookListContextProvider>,
  document.getElementById("root")
);
