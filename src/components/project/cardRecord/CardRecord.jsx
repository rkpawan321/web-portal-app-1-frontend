import React from 'react';
import _ from 'lodash';

import { Divider, Typography, IconButton, Tooltip } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './style';
import { useMediaQuery } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';

function CardRecord(props) {

	const getDividerColor = (projectStatus) => {
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

	const { classes, projectRecord, projectStatus } = props;
	const matches = useMediaQuery('(min-width:1250px)');
	const matchGreaterThan240 = useMediaQuery('(min-width:240px)');
	return (
		<>
			<Divider style={{ height: '3px', backgroundColor: getDividerColor(projectStatus), marginLeft: '-20px', marginRight: '-20px' }} />
			<div className={matches ? classes.singleCardRecordDesktop : classes.singleCardRecordMobile}>
				<Typography className={classes.singleCardRecordHeading}>{projectRecord.subject}</Typography>
				<div className={matches ? classes.singleCardRecordBottomPartDesktop : classes.singleCardRecordBottomPartMobile}>
					<div className={matches ? classes.singleCardRecordBottomPartDesktopLeftPart : matchGreaterThan240 ?  classes.singleCardRecordBottomPartMobileLeftPart : classes.singleCardRecordBottomPartMobileLeftPart240}>
						{_.map(projectRecord.instructors, (instructor, id) => {
							return (
								<Tooltip title={instructor.name} key={id} >
									<img src={`https://ui-avatars.com/api/?name=${instructor.name}`} className={matchGreaterThan240 ? classes.userAvatar : classes.userAvatar240} alt={id} />
								</Tooltip>
							)
						})}
						<Tooltip title={'Add Instructor'}>
							<IconButton className={classes.addPersonButton}>
								<AddCircleIcon color="primary" />
							</IconButton>
						</Tooltip>

					</div>
					<div className={matchGreaterThan240 ? classes.singleCardRecordBottomPartRightPart : classes.singleCardRecordBottomPartRightPart240}>
						<Tooltip title={'Assigned on'}>
							<div className={classes.dateBox}>
								<TodayIcon color="primary" className={classes.dateIcon} />
								{`${projectRecord.assigned_date}`}
							</div>
						</Tooltip>
						<Tooltip title={'Progress'}>
							<div className={matchGreaterThan240 ? classes.percentageBox : classes.percentageBox240}>
								{`${projectRecord.progress}%`}
							</div>
						</Tooltip>

					</div>
				</div>
			</div>
		</>);
}

export default withStyles(useStyles, { withTheme: true })(CardRecord);