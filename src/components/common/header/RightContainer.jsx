import React from 'react';
import { IconButton, Typography, SwipeableDrawer, InputAdornment, OutlinedInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Pawan from '../../../assets/logos/pawan_icon_photo.png';


const useStyles = theme => ({

    menuButton: {
        height: '40px',
        width: '40px',
        margin: '3px 6px 3px 0'
    },
    byjusLogo: {
        width: '34px',
        height: '34px',
    },
    userAvatar: {
        width: '34px',
        height: '34px',
        borderRadius: '6px',
        marginLeft: '20px',
    },
    appTitle: {
        fontFamily: 'Manrope-Bold',
        marginLeft: '20px',
        fontSize: '80%',
    },
    profileDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    rightSideButtonsDesktop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightSideButtonsMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '15px',
        paddingTop: '30px',
        height: '100px',
    },
    userName: {
        fontFamily: 'Manrope-Bold',
        marginLeft: '10px',
        fontSize: '80%',
        width: '70px',
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxShadow: 'none',
        paddingRight: '20px',
    },
    mobileSearchInput: {
        alignContent: 'center',
        height: '36px',
        width: '170px',
        marginRight: '20px',
    },
    searchButton: {
        height: '17px',
        width: '17px',
        marginRight: '-5px',
    },
    drawerContent: {
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignContent: 'start',
        width: '200px',
    },
    burgerIcon: {
        height: '40px',
        width: '40px',
        margin: '3px -5px 3px 0'
    }
});

class RightContainer extends React.Component {

    state = { searchButtonClicked: false, drawer: false }

    renderSearchBox = () => {
        const { classes } = this.props;
        return (


            <OutlinedInput
                className={classes.mobileSearchInput}
                autoFocus
                variant="outlined"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="search"
                            disabled={false}
                            className={classes.searchButton}
                        >
                            <SearchIcon style={{ color: '#000000' }} />
                        </IconButton>
                    </InputAdornment>
                }
            />

        )
    }

    renderMobileView = () => {
        const { classes } = this.props;
        return (
            <>
                <IconButton className={classes.burgerIcon} onClick={() => this.setState({ drawer: true, searchButtonClicked: true })}>
                    <MenuIcon color="primary" />
                </IconButton>
                <SwipeableDrawer
                    anchor="right"
                    open={this.state.drawer}
                    onClose={this.toggleDrawer('drawer', false)}
                    onOpen={this.toggleDrawer('drawer', true)}
                >
                    <div className={classes.drawerContent}>
                        {this.renderDesktopView()}
                    </div>
                </SwipeableDrawer>
            </>
        );
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    renderDesktopView = () => {
        const { classes, matches } = this.props;
        return (
            <>
                <div className={matches ? classes.rightSideButtonsDesktop : classes.rightSideButtonsMobile}>
                    {this.state.searchButtonClicked ? this.renderSearchBox() : <IconButton className={classes.menuButton} onClick={() => this.setState({ searchButtonClicked: true })}>			<SearchIcon color="primary" />
                    </IconButton>}
                    <IconButton className={classes.menuButton}>
                        <AddCircleIcon color="primary" />
                    </IconButton>
                </div>
                <div className={classes.profileDetails}>
                    <img src={Pawan} className={classes.userAvatar} alt="pawan" />
                    <Typography className={classes.userName}>
                        Pawan R K
                         </Typography>
                </div>
            </>
        )
    }
    render() {
        const { matches } = this.props;
        return (
            <>
                {matches ? this.renderDesktopView() : this.renderMobileView()}
            </>
        );
    }
};

export default withStyles(useStyles, { withTheme: true })(RightContainer);
