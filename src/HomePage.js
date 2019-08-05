import React from "react";
import react_logo from "./react-logo.svg";
import material_ui_logo from "./material-ui-logo.svg";
import github_logo from "./github-square-brands.svg";
import linkedin_logo from "./linkedin-brands.svg";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
	gridContainer: {
		//padding: theme.spacing(3)
	},
	logo: {
		height: 160,
		paddingBottom: theme.spacing(4)
	},
	gridItem: {
		padding: theme.spacing(4),
		textAlign: "center"
	}
}));

const HomePage = () => {
	const classes = useStyles();
	return (
		<Box>
			<Grid container direction="row" justify="flex-start" alignItems="center" className="name first">
				<Grid item className="ma">
					MA
				</Grid>
				<Grid item className="x">
					X
				</Grid>
			</Grid>

			<Grid container direction="row" justify="flex-start" alignItems="center" className="name last">
				<Grid item className="r">
					R
				</Grid>
				<Grid item className="andle">
					ANDLE
				</Grid>
			</Grid>

			<Grid container direction="row" justify="flex-start" alignItems="center" spacing={6}>
				<Grid item className="r">
					<img className={classes.logo} src={github_logo} alt="github logo" />
				</Grid>
				<Grid item className="r">
					<img className={classes.logo} src={linkedin_logo} alt="linkedin logo" />
				</Grid>
			</Grid>
		</Box>
	);
};

export default HomePage;

{
	/* <Grid container justify="center" alignItems="center" className={classes.gridContainer}>
	<Grid item className={classes.gridItem} sm={6} xs={12}>
		<img className={classes.logo} src={react_logo} alt="react logo" />
		<Typography variant="h3">React</Typography>
	</Grid>
	<Grid item className={classes.gridItem} sm={6} xs={12}>
		<img className={classes.logo} src={material_ui_logo} alt="material-ui logo" />
		<Typography variant="h3">Material-ui</Typography>
	</Grid>
</Grid>; */
}
