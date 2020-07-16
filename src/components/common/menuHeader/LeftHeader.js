import React from 'react';
import _ from 'lodash';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const tabHeight = '30px' // default: '48px'

const useStyles = theme => ({
    leftHeader: {
        backgroundColor: '#ffffff',
        marginTop: '-10px',
        boxShadow: 'none',
        color: '#2222222',
        display: 'flex',
        justifyContent: 'center',
    },
    tabsRoot: {
        minHeight: tabHeight,
        height: tabHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabRoot: {
        minHeight: tabHeight,
        height: tabHeight,
        color: '#222222',
        textTransform: 'capitalize',
        fontFamily: 'Manrope-Bold',
        fontSize: 'calc(0.2em + 0.9vmin)',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        minWidth: '2px', // a number of your choice
        // width: 5, // a number of your choice
    },
    indicator: {
        backgroundColor: '#823587',
        minWidth: '2px', // a number of your choice
    }
});

// state = { selectedMenu: (_.split(this.props.location.pathname, '/'))[1] };
class LeftHeader extends React.Component {

    state = {
        value: 0,
    };

    menuNames = ['List', 'Gantt', 'Board', 'Calender', 'Pivot', 'Process'];

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div>
                <AppBar position="static" className={classes.leftHeader}>
                    <Tabs value={value}
                        onChange={this.handleChange}
                        classes={{
                            root: classes.tabsRoot,
                            indicator: classes.indicator,
                        }}
                    >
                        {_.map(this.menuNames, (menuName) => {
                            return <Tab label={menuName} key={menuName} classes={{
                                root: classes.tabRoot
                            }}

                            />
                        })}
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(LeftHeader);
