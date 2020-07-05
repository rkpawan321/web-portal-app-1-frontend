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
    const renderSingleCard = (project, projectName) => {
        return (
            <Card className={matches ? classes.singleCardDesktop : classes.singleCardMobile}>
                <CardContent >
                    <div className={classes.cardHeader}>
                        <div className={classes.mainCardHeading}>{_.startCase(projectName)}</div>
                        <IconButton><MoreHorizIcon /></IconButton>
                    </div>
                    {_.map(project, (projectRecord, i) => {
                        return (
                            <React.Fragment key={i}>
                            <CardRecord matches={matches} projectRecord={projectRecord} projectStatus={projectName}/>
                            </React.Fragment>
                        )
                    })}

                </CardContent>
            </Card>
        )
    }
    return (
        <div className={matches ? classes.allCardsDesktop : classes.allCardsMobile}>
            {_.map(Object.keys(props.projects), (project, i) => {
                return !_.isEmpty(props.projects[project]) ? <React.Fragment key={i}>{renderSingleCard(props.projects[project], project)}</React.Fragment> : <> </>;
            })}
        </div>
    );
}

export default withStyles(useStyles, { withTheme: true })(CardList);
