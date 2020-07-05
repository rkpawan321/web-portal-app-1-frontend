import React from 'react';
import _ from 'lodash';

import AppHeader from '../common/header/AppHeader';
import MenuHeader from '../common/menuHeader/MenuHeader';
import LeftNavigation from '../common/header/LeftNavigation';
import { connect } from 'react-redux';
import { Box, Fab, CircularProgress } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import useStyles from './style'
import PersonIcon from '@material-ui/icons/Person';

import CardList from './CardList';
import { getAllProjects, resetGetAllProjects } from '../../actions';

class Project extends React.Component {

	componentDidMount() {
		this.props.resetGetAllProjects();
		this.props.getAllProjects();
	};


	getProgressIndicator = () => <CircularProgress style={{
		color: 'primary',
		left: '47%',
		top: '50%',
		position: 'absolute',
	}} disableShrink />;


	render() {
		const { classes, projects } = this.props;
		return (
			<>
				<AppHeader />
				<MenuHeader location={this.props.location} showRightOptions={true} />
				<LeftNavigation history={this.props.history} location={this.props.location} />
				<Box className={classes.landingPageContainer}>
					{_.isEmpty(projects.projectList) ? this.getProgressIndicator() : <CardList projects={projects.projectList}/>}
				</Box>
				<Fab color="primary" size="small" aria-label="person" style={{ position: 'fixed', bottom: '15px', right: '15px' }}>
					<PersonIcon style={{ color: 'white' }} />
				</Fab>
			</>
		);
	};
};

const mapStateToProps = (state) => {
	const { projects } = state;
	return {
		projects,
	};
};

const ConnectedProject = withStyles(useStyles, { withTheme: true })(connect(mapStateToProps, { getAllProjects, resetGetAllProjects })(Project));
export default ConnectedProject;
