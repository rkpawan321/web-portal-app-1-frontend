import React from 'react';
import _ from 'lodash';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const tabHeight = '30px' // default: '48px'

const useStyles = theme => ({
    secondAppBar: {
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
        fontSize: 'calc(0.25em + 1vmin)',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        minWidth: '5px', 
    },
    indicator: {
        backgroundColor: '#823587',
        minWidth: '5px', 
    }
});

class SecondHeader extends React.Component {

    state = {
        value: 0,
    };

    menuNames = ['Task', 'Conversation', 'Files', 'Resources', 'Status']

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div>

                <AppBar position="static" className={classes.secondAppBar}>
                    <Tabs value={value}

                        // fullWidth={true}
                        TabIndicatorProps={{
                            style: {
                                // width: "40px",
                            }
                        }}
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

export default withStyles(useStyles, { withTheme: true })(SecondHeader);
