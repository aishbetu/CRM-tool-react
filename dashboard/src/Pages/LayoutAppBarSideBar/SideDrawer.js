import {
    Divider,
    Drawer,
    List,
    makeStyles
} from "@material-ui/core";
import React from "react";
import DrawerList from "./components/DrawerList";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/PossifyIcon.png";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#edfaff',
        boxShadow: '3px 0px 5px rgba(0,0,0,0.1)'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    logo: {
        width: 'auto',
        height: 60
    },
    dividerStyle: {
        backgroundColor: '#cacaca66',
    },
    drawerFooter: {
        alignItems: 'center',
        margin: theme.spacing(4, 2, 0, 0),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    copyRightFooter: {
        padding: theme.spacing(4, 0),
        color: '#403e3ede'
    },
}));

const SideDrawer = (props) => {
    const classes = useStyles();
    const { open, children } = props;
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    {/*<Logo className={classes.logo} />*/}
                    <img src={Logo} alt="logo" className={classes.logo}/>
                </Grid>
                {/*<IconButton onClick={handleDrawerClose}>*/}
                {/*    {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.iconsStyle} /> : <ChevronRightIcon className={classes.iconColor} />}*/}
                {/*</IconButton>*/}
            </div>
            <Divider light variant="middle" className={classes.dividerStyle}/>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <List>
                    <DrawerList children={children} />
                </List>
            </Grid>

            <Divider light variant="middle" className={classes.dividerStyle}/>
            <div className={classes.drawerFooter}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignContent="flex-end"
                    alignItems="flex-end">
                    <Typography variant="caption" noWrap className={classes.copyRightFooter}>
                        Copyright © 2021
                    </Typography>


                </Grid>
            </div>
        </Drawer>
    );
};

export default SideDrawer;
