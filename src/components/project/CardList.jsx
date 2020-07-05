import React from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import {  Card, CardContent, IconButton } from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CardRecord from './cardRecord';


const useStyles = theme => ({
    singleCardMobile: {
        marginTop: '20px',
        fontFamily: 'Manrope-Bold',
        backgroundColor: '#F7F7FA',
        fontSize: '15px',
        height: '100%',
        width: '97%',
        overflowX: 'scroll',
    },
    singleCardDesktop: {
        margin: '20px',
        fontFamily: 'Manrope-Bold',
        backgroundColor: '#F7F7FA',
        fontSize: '15px',
        height: '100%',
        width: '30%',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    mainCardHeading: {
        color: '#000000'
    },
    allCardsDesktop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
    },
    allCardsMobile: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
});

function CardList(props) {
    const { classes } = props;
    const matches = useMediaQuery('(min-width:670px)');
    const renderSingleCard = (project) => {
        return (
            <Card className={matches ? classes.singleCardDesktop : classes.singleCardMobile}>
                <CardContent >
                    <div className={classes.cardHeader}>
                        <div className={classes.mainCardHeading}>{_.startCase(Object.keys(project)[0])}</div>
                        <IconButton><MoreHorizIcon /></IconButton>
                    </div>
                    {_.map(project[Object.keys(project)[0]], (projectRecord, i) => {
                        return (
                            <React.Fragment key={i}>
                            <CardRecord matches={matches} projectRecord={projectRecord} projectStatus={Object.keys(project)[0]}/>
                            </React.Fragment>
                        )
                    })}

                </CardContent>
            </Card>
        )
    }
    return (
        <div className={matches ? classes.allCardsDesktop : classes.allCardsMobile}>
            {_.map(props.projects, (project, i) => {
                return <React.Fragment key={i}>{renderSingleCard(project)}</React.Fragment>
            })}
        </div>
    );
}

// const theme = createMuiTheme({ typography: { useNextVariants: true } });


// class AppHeader extends React.Component {


// 	renderRightSideDesktopView = () => {
// 		const { classes, showBackButton = false, onBackClick } = this.props;
// 		return (
// 			
// 		)
// 	}
// 	render() {
// 		const { classes, showBackButton = false, onBackClick } = this.props;

// 	}
// };

export default withStyles(useStyles, { withTheme: true })(CardList);
