import React, { useState } from "react";
import { Paper, Tabs, Tab, Grid } from "@material-ui/core";
import ReactSkill from "./ReactSkill";
import UiPathSkill from "./UiPathSkill";
import NodeSkill from "./NodeSkill";
import PythonSkill from "./PythonSkill";

const ProjectsPage = props => {
  const [val, setVal] = useState(0);
  const project = [<ReactSkill />, <UiPathSkill />, <NodeSkill />, <PythonSkill />];

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>
        <Paper>
          <Tabs
            value={val}
            onChange={(event, newVal) => setVal(newVal)}
            aria-label="disabled tabs example"
            textColor="primary"
          >
            <Tab label="React" />
            <Tab label="UiPath" />
            <Tab label="Node" />
            <Tab label="Python" />
          </Tabs>
        </Paper>
      </Grid>

      <Grid item>{project[val]}</Grid>
    </Grid>
  );
};

export default ProjectsPage;
