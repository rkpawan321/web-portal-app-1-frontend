import React from 'react';
import { Fab } from '@material-ui/core';
import AppHeader from '../common/header/AppHeader';
import LeftNavigation from '../common/header/LeftNavigation';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style'
import PersonIcon from '@material-ui/icons/Person';

class UnderConstruction extends React.Component {

	render() {
		const { classes } = this.props;
		return (
			<>
		
				<AppHeader />
				<LeftNavigation history={this.props.history} location={this.props.location}/>
				<Box className={classes.landingPageContainer}>
					<WarningIcon color="primary"/>
					<Typography style={{ color: '#cbcbcb', 	fontSize: 'calc(0.6em + 0.8vmin)', margin: '70px', marginTop: '120px'}}>Page under construction</Typography>
				</Box>
				<Fab color="primary" size="small" aria-label="person" style={{position: 'fixed', bottom: '15px', right: '15px'}}>
						<PersonIcon style={{color: 'white'}}/>
					</Fab>
			</>
		)
	}
};



const ConnectedUnderConstruction = withStyles(useStyles, { withTheme: true })(connect(undefined)(UnderConstruction));
export default ConnectedUnderConstruction;
