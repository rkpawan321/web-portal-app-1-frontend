import React from 'react';
import _ from 'lodash';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import RightContainer from './RightContainer';
import byjusLogo from '../../../assets/logos/byjus-logo.png';

const useStyles = theme => ({
	customizeToolbar: {
		minHeight: '36px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxShadow: 'none',
		padding: '10px',
	},
	menuButton: {
		height: '40px',
		width: '40px',
		margin: '3px 6px 3px 0'
	},
	byjusLogo: {
		width: '38px',
		height: '38px',
	},
	userAvatar: {
		width: '34px',
		height: '34px',
	},
	appTitle: {
		fontFamily: 'Manrope-Bold',
		marginLeft: '20px',
		fontSize: '90%',
	},
	userName: {
		fontFamily: 'Manrope-Bold',
		marginLeft: '20px',
		fontSize: '70%',
	},
	rightContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		boxShadow: 'none',
		paddingRight: '20px',
	},
	leftContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		boxShadow: 'none',
	},
	mobileSearchInput: {
		height: '36px',
		width: '20px',
	},
	searchButton: {
		height: '17px',
		width: '17px',
	},
});

function AppHeader(props) {
	const { classes } = props;
	const matches = useMediaQuery('(min-width:670px)');
	return (
		<div>
			<AppBar elevation={1} color="default" variant="elevation" style={{ backgroundColor: 'white' }}>
				<Toolbar className={classes.customizeToolbar}>

					<div className={classes.leftContainer}>
						<img src={byjusLogo} className={classes.byjusLogo} alt="byjus-logo" />
						<Typography className={classes.appTitle}>
							{_.toUpper('Operations App')}
						</Typography>
					</div>
					<div className={classes.rightContainer}>
						<RightContainer matches={matches} />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(useStyles, { withTheme: true })(AppHeader);
