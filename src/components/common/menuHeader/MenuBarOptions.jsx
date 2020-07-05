import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AppsIcon from '@material-ui/icons/Apps';

import { getAllProjects, resetGetAllProjects } from '../../../actions';

const fieldOptions = [
    'dashboard',
    'app',
];


const sortOptions = [
    'recent_first',
    'recent_last',
];

const filterOptions = [
    'on_track',
    'deployed',
    'on_hold',
];


const ITEM_HEIGHT = 48;

const useStyles = theme => ({


    menuButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        width: '38px',
        height: '38px',
    },
    menuButtonPlaceholder: {
        fontSize: '60%', marginRight: '20px', marginLeft: '-8px',
    }
});

class MenuBarOptions extends React.Component {

    state = { field: 'dashboard', sort: 'recent_first', filter: 'on_track', anchorElField: null, anchorElSort: null, anchorElFilter: null }

    getProjects = () => {
        this.props.resetGetAllProjects();
        this.props.getAllProjects();
    };

    handleChange = (stateName, event) => {
        if (stateName === 'field') {
            this.setState({ anchorElField: event.currentTarget });
        }
        if (stateName === 'sort') {
            this.setState({ anchorElSort: event.currentTarget });
        }
        if (stateName === 'filter') {
            this.setState({ anchorElFilter: event.currentTarget });
        }
    };

    handleClose = () => {
        this.setState({ anchorElField: null, anchorElSort: null, anchorElFilter: null });
        this.getProjects();
    };

    setOption = (stateName, option) => {
        if (stateName === 'field') {
            this.setState({ field: option, anchorElField: null, anchorElSort: null, anchorElFilter: null })
        }
        if (stateName === 'sort') {
            this.setState({ sort: option, anchorElField: null, anchorElSort: null, anchorElFilter: null })
        }
        if (stateName === 'filter') {
            this.setState({ filter: option, anchorElField: null, anchorElSort: null, anchorElFilter: null })
        }
        this.getProjects();
    };

    renderFieldIcon = () => {
        const { field } = this.state;
        if (field === fieldOptions[0]) {
            return <DashboardIcon color="primary" />
        }
        if (field === fieldOptions[1]) {
            return <AppsIcon color="primary" />
        }

    }

    renderSortIcon = () => {
        const { sort } = this.state;
        if (sort === sortOptions[0]) {
            return <SortIcon color="primary" />
        }
        if (sort === sortOptions[1]) {
            return <SortIcon color="primary" style={{ transform: 'rotate(180deg)' }} />
        }
    }

    renderFilterIcon = () => {
        const { filter } = this.state;
        if (filter === filterOptions[0]) {
            return <FilterListIcon color="primary" />
        }
        if (filter === filterOptions[1]) {
            return <FilterListIcon color="primary" style={{ transform: 'rotate(180deg)' }} />
        }
        if (filter === filterOptions[2]) {
            return <FilterListIcon color="primary" style={{ transform: 'rotate(270deg)' }} />
        }
    }

    renderIconsByState = (stateName) => {
        if (stateName === 'field') {
            return this.renderFieldIcon();
        }
        if (stateName === 'sort') {
            return this.renderSortIcon();
        }
        if (stateName === 'filter') {
            return this.renderFilterIcon();
        }
    }



    renderDesktopAndMobileView = () => {
        const { anchorElField, anchorElSort, anchorElFilter } = this.state;
        let open, currentAnchor;
        const { classes } = this.props;
        return (
            <>

                {_.map(['field', 'sort', 'filter'], (item) => {
                    let currentList;
                    switch (item) {
                        case 'field':
                            currentList = fieldOptions; open = Boolean(anchorElField); currentAnchor = anchorElField;
                            break;
                        case 'sort':
                            currentList = sortOptions; open = Boolean(anchorElSort); currentAnchor = anchorElSort;
                            break;
                        case 'filter':
                            currentList = filterOptions; open = Boolean(anchorElFilter); currentAnchor = anchorElFilter;
                            break;
                        default:
                            currentList = fieldOptions; open = Boolean(anchorElField); currentAnchor = anchorElField;
                    }
                    return (
                        <div className={classes.menuButton} key={item}>
                            <IconButton onClick={(event) => this.handleChange(item, event)}>
                                {this.renderIconsByState(item)}

                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={currentAnchor}
                                open={open}
                                onClose={this.handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: 200,
                                    },
                                }}
                            >
                                {currentList.map(option => (
                                    <MenuItem key={option} onClick={() => this.setOption(item, option)}>
                                        {_.startCase(option)}
                                    </MenuItem>
                                ))}
                            </Menu>

                            {this.props.matches ?
                                <div style={{ textAlign: 'left', width: '70px' }}>
                                    <Typography className={classes.menuButtonPlaceholder}>
                                        {_.startCase(this.state[item])}
                                    </Typography>
                                </div> : <> </>}
                        </div>
                    )
                })}
            </>
        )
    }
    render() {
        return (
            <>
                {this.renderDesktopAndMobileView()}
            </>
        );
    }
};

const mapStateToProps = (state) => {
    const { projects } = state;
    return {
        projects,
    };
};

const ConnectedMenuBarOptions = withStyles(useStyles, { withTheme: true })(connect(mapStateToProps, { getAllProjects, resetGetAllProjects })(MenuBarOptions));
export default ConnectedMenuBarOptions;









