import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LanguageIcon from '@material-ui/icons/Language';
import FilterNoneIcon from '@material-ui/icons/FilterNone';

import { getAllProjects, resetGetAllProjects } from '../../../actions';

const sortOptions = [
    'core',
    'language',
    'all_subjects',
];

const filterOptions = [
    'on_track',
    'delayed',
    'on_hold',
    'all',
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
        fontSize: '60%', marginRight: '20px', marginLeft: '-4px',
    }
});

class MenuBarOptions extends React.Component {

    state = { sort: 'all_subjects', filter: 'all', anchorElField: null, anchorElSort: null, anchorElFilter: null }

    getProjects = () => {
        this.props.resetGetAllProjects();
        this.props.getAllProjects(this.state.sort, this.state.filter);
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
            this.setState({ field: option, anchorElField: null, anchorElSort: null, anchorElFilter: null });
            setTimeout(function () {
                this.getProjects();
            }.bind(this), 200);
        }
        if (stateName === 'sort') {
            this.setState({ sort: option, anchorElField: null, anchorElSort: null, anchorElFilter: null });
            setTimeout(function () {
                this.getProjects();
            }.bind(this), 200);
        }
        if (stateName === 'filter') {
            this.setState({ filter: option, anchorElField: null, anchorElSort: null, anchorElFilter: null });
            setTimeout(function () {
                this.getProjects();
            }.bind(this), 200);
        }
    };

    renderSortIcon = () => {
        const { sort } = this.state;
        if (sort === sortOptions[0]) {
            return <EmojiObjectsIcon color="primary" />
        }
        if (sort === sortOptions[1]) {
            return <LanguageIcon color="primary" />
        } else {
            return <FilterNoneIcon color="primary" />
        }
    }

    renderFilterIcon = () => {
        const { filter } = this.state;
        if (filter === filterOptions[0]) {
            return <WorkOutlineIcon color="primary" />
        }
        if (filter === filterOptions[1]) {
            return <HourglassEmptyIcon color="primary" />
        }
        if (filter === filterOptions[2]) {
            return <ErrorOutlineIcon color="primary" />
        }
        if (filter === filterOptions[3]) {
            return <SelectAllIcon color="primary" />
        }
    }

    renderIconsByState = (stateName) => {
        if (stateName === 'sort') {
            return this.renderSortIcon();
        }
        if (stateName === 'filter') {
            return this.renderFilterIcon();
        }
    }



    renderDesktopAndMobileView = () => {
        const { anchorElSort, anchorElFilter } = this.state;
        let open, currentAnchor;
        const { classes } = this.props;
        return (
            <>

                {_.map(['sort', 'filter'], (item) => {
                    let currentList;
                    switch (item) {
                        case 'sort':
                            currentList = sortOptions; open = Boolean(anchorElSort); currentAnchor = anchorElSort;
                            break;
                        case 'filter':
                            currentList = filterOptions; open = Boolean(anchorElFilter); currentAnchor = anchorElFilter;
                            break;
                        default:
                            currentList = sortOptions; open = Boolean(anchorElSort); currentAnchor = anchorElSort;
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









