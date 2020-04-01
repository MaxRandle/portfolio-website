import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./Index.scss";
import { deepPurple, amber } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import BookListContextProvider from "./contexts/BookListContext";
import AppStateContextProvider from "./contexts/AppStateContext";
import CartContextProvider from "./contexts/CartContext";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: deepPurple[400]
    },
    secondary: {
      main: amber[800]
    }
  }
});

ReactDOM.render(
  <BookListContextProvider>
    <AppStateContextProvider>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CartContextProvider>
    </AppStateContextProvider>
  </BookListContextProvider>,
  document.getElementById("root")
);
