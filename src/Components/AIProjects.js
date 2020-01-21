import React, { useState, useContext } from "react";
import { Button, Grid, Card, CardHeader, CardContent, Divider, Typography, Link, CardActions } from "@material-ui/core";
import Board from "./Board";
import { BoardStateContext } from "../contexts/BoardStateContext";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({}));

const Page = props => {
  const classes = useStyles();
  const [boardState, setBoardState] = useContext(BoardStateContext);

  const resetBoard = () => {
    setBoardState({
      boardArray: new Array(9).fill(new Array(9).fill(null)).map(x => x.slice(0)),
      victoryArray: new Array(9).fill(null),
      lastMove: {
        square: null,
        tile: null
      },
      turn: -1,
      victory: null
    });
  };

  const winner = () => {
    let text;
    switch (boardState.victory) {
      case 1:
        return "AI victory!";
      case -1:
        return "Human victory!";
      case 0:
        return "Draw!";
      default:
        return boardState.turn === 1 ? "AI's turn" : "Human's turn";
    }
  };

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Typography>Welcome to Ultimate Tic Tac Toe...</Typography>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader title="Ultimate Tic-Tac-Toe" />
          <Divider />
          <CardContent>
            <Typography>{winner()}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Grid container justify="center">
          <Grid item>
            <Board />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Card>
          <CardActions>
            <Button variant="contained" color="secondary" onClick={() => resetBoard()}>
              reset
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
