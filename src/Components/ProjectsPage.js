import React, { useState } from "react";
import { Paper, Tabs, Tab, Grid } from "@material-ui/core";
import JSProjects from "./P5Projects";
import MLProjects from "./MLProjects";
import AIProjects from "./AIProjects";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  spacer: {
    width: "40px",
    height: "40px"
  },
  gapLeft: {
    marginLeft: "40px"
  }
}));

const ProjectsPage = props => {
  const [val, setVal] = useState(0);
  const project = [<JSProjects />, <MLProjects />, <AIProjects />];
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <span className={classes.spacer} />
        <Paper className={classes.gapLeft}>
          <Tabs
            value={val}
            // indicatorColor="primary"
            textColor="primary"
            onChange={(event, newVal) => setVal(newVal)}
            aria-label="disabled tabs example"
          >
            <Tab label="P5.js" />
            <Tab label="ML" />
            <Tab label="AI" />
          </Tabs>
        </Paper>
      </Grid>

      <Grid item>{project[val]}</Grid>
    </Grid>
  );
};

export default ProjectsPage;
