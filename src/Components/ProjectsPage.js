import React, { useState } from "react";
import { Paper, Tabs, Tab, Grid } from "@material-ui/core";
import P5Projects from "./P5Projects";
import MLProjects from "./MLProjects";
import AIProjects from "./AIProjects";
import WebProjects from "./WebProjects";
import ShoppingCartProject from "./ShoppingCartProject";

const ProjectsPage = () => {
  const [val, setVal] = useState(0);
  const project = [<P5Projects />, <MLProjects />, <AIProjects />, <ShoppingCartProject />];

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Paper>
          <Tabs
            value={val}
            textColor="primary"
            onChange={(event, newVal) => setVal(newVal)}
            aria-label="disabled tabs example"
          >
            <Tab label="P5.js" />
            <Tab label="ML" />
            <Tab label="AI" />
            <Tab label="Web" />
          </Tabs>
        </Paper>
      </Grid>

      <Grid item>{project[val]}</Grid>
    </Grid>
  );
};

export default ProjectsPage;
