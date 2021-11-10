import React, {useEffect} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from '@material-ui/core/Avatar';
import {useStyles} from "./NavStyle";
import SideDrawer from "./SideDrawer";




const NavBar = ({ children }) => {
    const data = JSON.parse(localStorage.getItem('loginData'))
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [userName, setUserName] = React.useState()

    useEffect(() => {
        if(data) {
            setUserName(data.email)
        }
    },[])

    const handleDrawerOpen = () => {
        if(!open){
            setOpen(true);
        }else{
            setOpen(false);
        }
    };


    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';


    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
        </Menu>
    );


    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/*<Typography variant="h6" noWrap className={classes.title}>*/}
                    {/*    Dashboard*/}
                    {/*</Typography>*/}


                    <div className={classes.grow} />
                    <div>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            className={classes.sectionDesktop}
                            onClick={e => setAnchorEl(e.currentTarget)}
                            color="inherit"
                        >
                            <Avatar alt={userName ? userName : 'Aishwary'} src={userName ? userName : 'A'} className={classes.userAvatar} />
                            {/*<AccountCircle />*/}
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
            <SideDrawer open={open} children={children} />
            {/*<Drawer*/}
            {/*    className={classes.drawer}*/}
            {/*    variant="persistent"*/}
            {/*    anchor="left"*/}
            {/*    open={open}*/}
            {/*    classes={{*/}
            {/*        paper: classes.drawerPaper,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div className={classes.drawerHeader}>*/}
            {/*        <Grid*/}
            {/*            container*/}
            {/*            direction="row"*/}
            {/*            justify="center"*/}
            {/*            alignItems="center">*/}
            {/*            /!*<Logo className={classes.logo} />*!/*/}
            {/*            <img src={Logo} alt="logo" className={classes.logo}/>*/}
            {/*        </Grid>*/}
            {/*        /!*<IconButton onClick={handleDrawerClose}>*!/*/}
            {/*        /!*    {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.iconsStyle} /> : <ChevronRightIcon className={classes.iconColor} />}*!/*/}
            {/*        /!*</IconButton>*!/*/}
            {/*    </div>*/}
            {/*    <Divider light variant="middle" className={classes.dividerStyle}/>*/}
            {/*    <Grid*/}
            {/*        container*/}
            {/*        direction="column"*/}
            {/*        justify="center"*/}
            {/*        alignItems="center"*/}
            {/*    >*/}
            {/*    <List>*/}
            {/*        <DrawerList children={children} />*/}
            {/*    </List>*/}
            {/*    </Grid>*/}

            {/*    <Divider light variant="middle" className={classes.dividerStyle}/>*/}
            {/*    <div className={classes.drawerFooter}>*/}
            {/*        <Grid*/}
            {/*            container*/}
            {/*            direction="row"*/}
            {/*            justify="center"*/}
            {/*            alignContent="flex-end"*/}
            {/*            alignItems="flex-end">*/}
            {/*                <Typography variant="caption" noWrap className={classes.copyRightFooter}>*/}
            {/*                    Copyright © 2021*/}
            {/*                </Typography>*/}


            {/*        </Grid>*/}
            {/*    </div>*/}
            {/*</Drawer>*/}
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >

                {children}

            </main>
            {renderMenu}

        </div>

    );
}
export default NavBar;
