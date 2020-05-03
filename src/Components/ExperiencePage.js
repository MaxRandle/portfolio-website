import React from "react";
import { Card, CardContent, Divider, Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 0, 0, 0),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  logo: {
    height: 80,
  },
  center: {
    textAlign: "center",
  },
  title: {
    lineHeight: "80px",
  },
  jobHeader: {
    display: "flex",
  },
  jobTitle: {
    flexGrow: "1",
    marginBottom: theme.spacing(1),
  },
  textBlock: {
    marginBottom: theme.spacing(1),
  },
}));

const Page = (props) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container)}>
      <Typography variant="h3" className={classes.section}>
        Work Experience
      </Typography>

      <Card className={classes.section}>
        <CardContent>
          <Box className={classes.jobHeader}>
            <Typography variant="h5" className={classes.jobTitle}>
              Front-End and Automation Developer
            </Typography>
            <Typography variant="subtitle1">July 2018 - Present</Typography>
          </Box>
          <Typography variant="subtitle1">Probity Consulting</Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography className={classes.textBlock}>
            During my time at this position I have played a key role in several front-end and software automation
            solutions targeting complex business processes.
          </Typography>
          <Typography variant="h6">Key Responsibilities</Typography>
          <Container className={classes.textBlock}>
            <Typography>• Conducting solution design work</Typography>
            <Typography>• Selecting technology stack</Typography>
            <Typography>• Developing solution</Typography>
            <Typography>• Liaise with clients to gather solution requirements and elicit feedback</Typography>
          </Container>
          <Typography className={classes.textBlock}>
            Additionally I have been involved in conducting technical interviews, candidate selection, and training of
            junior staff.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Page;

// • . . • . • • . • . . • . • • .
