import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Index.scss";
import purple from "@material-ui/core/colors/purple";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "rgba(255, 255, 255, 0.95)",
      dark: "rgba(255, 255, 255, 0.9)",
      contrastText: "#000"
    },
    secondary: {
      light: "rgba(70,80,90, 0.95)",
      main: "#46505a",
      dark: "#384048",
      contrastText: "#fff"
    },
    background: {
      light: "white",
      dark: "#384048"
    },
    type: "dark", // dark or light
    divider: "rgba(255, 255, 255, 0.87)"
  }
  //   palette: {
  //     primary: {
  //       main: grey[300]
  //     },
  //     secondary: {
  //       main: purple[800]
  //     },
  //     type: "dark",
  //     divider: "rgba(255, 255, 255, 0.87)"
  // text: {
  //   primary: "rgba(255, 255, 255, 0.87)"
  // },
  // background: {
  //   paper: "#363636"
  // }
  //   }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
