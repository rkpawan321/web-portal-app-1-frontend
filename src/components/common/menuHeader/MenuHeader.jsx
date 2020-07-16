import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { useMediaQuery } from '@material-ui/core';
import MenuBarOptions from './MenuBarOptions';
import LeftHeader from './LeftHeader';

const useStyles = theme => ({
	menuBarContainer: {
		width: 'calc(100% - 50px)',
		minHeight: '36px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		left: '50px',
		position: 'fixed',
		marginRight: '40px',
		paddingTop: '10px',
		paddingBottom: '10px',
		zIndex: 1,
		marginTop: '15px',
	},
	menuBarContainerWide: {
		width: '100%',
		minHeight: '72px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		// justifyContent: 'right',
		backgroundColor: 'white',
		left: '0',
		position: 'fixed',
		// marginRight: '40px',
		paddingTop: '10px',
		paddingBottom: '10px',
		zIndex: 1,
		marginTop: '15px',
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
		justifyContent: 'right',
	},

});




function MenuHeader(props) {

	const { classes, showRightOptions } = props;
	const matches = useMediaQuery('(min-width:670px)');
	const matches500 = useMediaQuery('(min-width:500px)');
	const matchesLessOrEqualTo500 = useMediaQuery('(max-width : 499px)');

	return (
		<div>
			<div className={matches500 ? classes.menuBarContainer : classes.menuBarContainerWide}>
				<div className={classes.menuList}>
					<div className={classes.currentMenuName}>
						<LeftHeader currentMenuName={props.location.pathname} matches500={matches500} />
					</div>
				</div>
				{showRightOptions ?
					<div className={classes.viewOptionSelector}>
						<MenuBarOptions matches={matches}  matches500={matches500} matchesLessOrEqualTo500={matchesLessOrEqualTo500}/>
					</div>
					:
					<> </>
				}

			</div>

		</div>
	);
}


export default withStyles(useStyles, { withTheme: true })(MenuHeader);
