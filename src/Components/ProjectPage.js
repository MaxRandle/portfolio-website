import React, { useState } from "react";
import { Paper, Tabs, Tab, Grid } from "@material-ui/core";
import JSProjects from "./P5Projects";
import MLProjects from "./MLProjects";

const ProjectsPage = props => {
  const [val, setVal] = useState(0);
  const project = [<JSProjects />, <MLProjects />, <></>];

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Paper>
          <Tabs
            value={val}
            // indicatorColor="primary"
            // textColor="primary"
            onChange={(event, newVal) => setVal(newVal)}
            aria-label="disabled tabs example"
          >
            <Tab label="P5.js" />
            <Tab label="Machine Learning" />
            <Tab label="AI" />
          </Tabs>
        </Paper>
      </Grid>

      <Grid item>{project[val]}</Grid>
    </Grid>
  );
};

export default ProjectsPage;
