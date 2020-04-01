import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Uttt from "./uttt/components/App";

const useStyles = makeStyles(theme => ({
  center: {
    textAlign: "center"
  }
}));

const Page = props => {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Typography variant="h3">Ultimate Tic-Tac-Toe AI</Typography>
      </Grid>

      <Grid item>
        <Typography>
          Scroll to the bottom for live demo!
          <br />
          <br />
          The game of UTTT (Ultimate Tic Tac Toe) presents interesting challenges for both humans and machines to play.
          The main challenge facing both humans and machines is that its very difficult to look at a given board state
          and work out which player has an advantage overall. Even at the highest level of play, humans tend to play
          without any well defined strategy and experts might not be able to tell you who has the upper hand in a match.
          Basically, this game is hard.
          <br />
          <br />
          So the greatest challenge is coming up with a static evaluation function. This is a function that takes the
          current state of the game as an input, and returns a number between 1 and -1, 1 meaning certain victory for
          player1 and -1 meaning certain defeat for player1. For a game like chess we can come up with a crude static
          evaluation function by adding up the pieces in play for each player. But for UTTT, no such function is known.
          So instead we have to resort to using something called monte-carlo tree search. This algorithm essentially
          plays out the remainer of moves in the game totally at random until the game is over. This is done many times
          and the outcome of each run is recorded. The score is calculated by player1 wins - player2 wins divided by the
          number of itterations.
          <br />
          <br />
          The next challenge faced was coming up with moves that lead to advantageous board states as evaluated by
          monte-carlo tree search. First we generate a tree of board states that are able to be legally reached in 'n'
          moves (depth=n). Then the leaf nodes are evaluated with monte-carlo, the evaluations are then propogated up
          the tree until we reach the root node and the scores for each move at depth=1 are compared. This algorithm is
          called the minimax algorithm,{" "}
          <Link color="inherit" underline="always" href="https://www.youtube.com/watch?v=l-hh51ncgDI">
            this YouTube video
          </Link>{" "}
          does a fantastic job of explaining how it works.
          <br />
          <br />
          Unfortunately the minimax algorithm is an exhaustive search approach, meaning it explores every possible
          branch of the tree, even ones that should be unreachable due to the opponent never allowing such a move. This
          is a pretty computationally expensive algorithm O(n^m) where m is branching factor and n is depth. looking 5
          moves deep could easily lead to evaluating 200,000+ board states. So what can we do? We want this to run on a
          server with specs I can afford. This is the last challenge faced. Luckily, we have a few tricks at our
          disposal.
          <br />
          <br />
          The first thing we can do is to implement something called alpha-beta pruning. This basically eliminates
          branches of the search tree that are unreachable due to the opponent taking a more advantageous move earlier
          on in the tree. The pruning effect can be maximized by caring about the order in which board states are
          evaluated. Moves that are likely to be good moves at first glance should be evaluated first. The second thing
          we can do is to implement something called progressive deepening which searches deeper into more promising
          lines of play instead of just a flat depth of 5 moves. In the current incarnation of the AI, I have
          implemented alpha-beta pruning but not progressive deepening, I'll save that one for later.
          <br />
          <br />
          Until then, have fun getting crushed...
        </Typography>
      </Grid>

      <Grid item>
        <Grid container justify="center">
          <Grid item>
            <Uttt />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;
