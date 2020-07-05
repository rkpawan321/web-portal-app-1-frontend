import React from 'react';
import _ from 'lodash';

import { Divider, Typography, IconButton, Tooltip } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './style';
import TodayIcon from '@material-ui/icons/Today';

class CardRecord extends React.Component {

	getDividerColor = (projectStatus) => {
		switch (projectStatus) {
			case 'on_track':
				return 'green';
			case 'delayed':
				return 'red';
			case 'on_hold':
				return '#B2B200';
			default:
				return 'black';
		}
	}
	render() {

		const { classes, matches, projectRecord, projectStatus } = this.props;
		return (
			<>
				<Divider style={{ height: '3px', backgroundColor: this.getDividerColor(projectStatus), marginLeft: '-20px', marginRight: '-20px' }} />
				<div className={matches ? classes.singleCardRecordDesktop : classes.singleCardRecordMobile}>
					<Typography className={classes.singleCardRecordHeading}>{projectRecord.subject}</Typography>
					<div className={matches ? classes.singleCardRecordBottomPartDesktop : classes.singleCardRecordBottomPartMobile}>
						<div className={matches ? classes.singleCardRecordBottomPartDesktopLeftPart : classes.singleCardRecordBottomPartMobileLeftPart}>
							{_.map(projectRecord.instructors, (instructor, id) => {
								return (
									<Tooltip title={instructor.name} key={id} >
									<img src={`https://ui-avatars.com/api/?name=${instructor.name}`} className={classes.userAvatar} alt={id} />
									</Tooltip>
								)
							})}
							<Tooltip title={'Add Instructor'}>
							<IconButton className={classes.addPersonButton}>
								<AddCircleIcon color="primary" />
							</IconButton>
							</Tooltip>

						</div>
						<div className={classes.singleCardRecordBottomPartRightPart}>
						<Tooltip title={'Assigned on'}>
							<div className={classes.dateBox}>
								<TodayIcon color="primary" fontSize="small" />
								{`${projectRecord.assigned_date}`}
							</div>
							</Tooltip>
							<Tooltip title={'Progress'}>
							<div className={classes.percentageBox}>
								{`${projectRecord.progress}%`}
							</div>
							</Tooltip>

						</div>
					</div>
				</div>
			</>);
	}
}

export default withStyles(useStyles, { withTheme: true })(CardRecord);