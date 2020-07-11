import React from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';

import { useMediaQuery } from '@material-ui/core';
import MenuBarOptions from './MenuBarOptions';

const useStyles = theme => ({
	menuBarContainer: {
		width: 'calc(100% - 70px)',
		minHeight: '36px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		left: '70px',
		position: 'fixed',
		marginRight: '40px',
		paddingTop: '10px',
		paddingBottom: '10px',
		zIndex: 1,
	},
	menuList: {
		padding: '12px',
	},
	currentMenuName: {
		fontFamily: 'Manrope-Regular',
		paddingLeft: '8px',
		paddingRight: '8px',
		paddingBottom: '2px',
		fontSize: 'calc(0.6em + 0.8vmin)',
	},
	viewOptionSelector: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '10px',
		justifyContent: 'space-between',
	},

});




function MenuHeader(props) {

	const { classes, showRightOptions } = props;
	const matches = useMediaQuery('(min-width:670px)');
	return (
		<div>
			<div className={classes.menuBarContainer}>


				<div className={classes.menuList}>


					<div className={classes.currentMenuName} style={{ borderBottom: '1.5px solid #823587', color: '#000000'}}>
						{_.startCase(props.location.pathname, '/')}
					</div>


				</div>
				{showRightOptions ?
					<div className={classes.viewOptionSelector}>
						<MenuBarOptions matches={matches} />
					</div>
					:
					<> </>
				}

			</div>

		</div>
	);
}


export default withStyles(useStyles, { withTheme: true })(MenuHeader);
