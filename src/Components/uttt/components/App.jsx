import React from "react";
import Board from "./Board";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid, Box } from "@material-ui/core";
import GameStateContextProvider from "../contexts/GameStateContext";
import SizeContextProvider from "../contexts/SizeContext";
import ControlBar from "./ControlBar";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#263690",
    },
  },
  spacing: 4,
  tile: {
    small: {
      size: "calc(11.111vmin - 6.223px)",
      // size: 40
    },
    large: {
      size: "calc(33.333vmin - 10.667px)",
    },
  },
  tilePadding: {},
});

const useStyles = makeStyles((theme) => ({
  spacer: {
    marginBottom: "16px",
  },
  center: {
    textAlign: "center",
  },
}));

function App(props) {
  const classes = useStyles();

  return (
    <GameStateContextProvider>
      <SizeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <ControlBar className={classes.spacer} /> */}
          <Board />
        </ThemeProvider>
      </SizeContextProvider>
    </GameStateContextProvider>
  );
}

export default App;
