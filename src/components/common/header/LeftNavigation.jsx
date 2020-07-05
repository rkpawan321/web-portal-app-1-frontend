import React from 'react';
import _ from 'lodash';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import { LEFT_MENU_OPTIONS } from '../../../constants';

const useStyles = theme => ({

	leftNavigationBar: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'purple',

		width: '70px',


		left: '0px',
		position: 'fixed',
		overflowY: 'scroll',
		height: 'calc(100% - 64px)',

	},
	menuButton: {

		width: '100%',
		height: '70px',
		marginLeft: '8px',
		borderTopLeftRadius: '6px',
		borderBottomLeftRadius: '6px',
		alignContent: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
	},
	menuButtonSelected: {
		width: '100%',
		height: '65px',
		marginLeft: '8px',
		backgroundColor: 'white',
		borderTopLeftRadius: '6px',
		borderBottomLeftRadius: '6px',
		alignContent: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
	},
	menuIcon: {
		color: 'white'
	}
});



class LeftNavigationBar extends React.Component {

	state = { selectedMenu:  (_.split(this.props.location.pathname, '/'))[1] };

	renderMenuIcon = (option) => {
		switch (option) {
			case LEFT_MENU_OPTIONS[0]:
				return <HomeIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
			case LEFT_MENU_OPTIONS[1]:
				return <FindInPageIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
			case LEFT_MENU_OPTIONS[2]:
				return <AccountTreeIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
			case LEFT_MENU_OPTIONS[3]:
				return <CalendarTodayIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
			case LEFT_MENU_OPTIONS[4]:
				return <AssignmentIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
			case LEFT_MENU_OPTIONS[5]:
				return <DynamicFeedIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
			case LEFT_MENU_OPTIONS[6]:
				return <ShowChartIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
			default:
				return <HomeIcon style={{ color: this.state.selectedMenu === option ? '#823587' : 'white' }} />;
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.leftNavigationBar} >

					{_.map(LEFT_MENU_OPTIONS, (item) => {
						return (
							<div key={item} onClick={() => this.setState({ selectedMenu: item }, this.props.history.push(`${item}`))} className={item === this.state.selectedMenu ? classes.menuButtonSelected : classes.menuButton} >
								<Tooltip title={_.startCase(item)}>
									{this.renderMenuIcon(item)}
								</Tooltip>
							</div>
						)
					})}
					{/* */}
				</div>
			</div>
		);
	}
};

export default withStyles(useStyles, { withTheme: true })(LeftNavigationBar);
