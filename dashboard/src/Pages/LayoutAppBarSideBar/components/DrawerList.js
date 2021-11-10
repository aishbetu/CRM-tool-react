import React, {useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { DashboardOutlined, SettingsOutlined, ExitToAppOutlined, AddCircleOutline, DateRangeOutlined } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./DrawerListStyles";
import {Typography, useTheme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { SvgIcon, } from '@material-ui/core'
import {Link, useRouteMatch, useLocation} from 'react-router-dom'
import { ReactComponent as Customers } from '../../../assets/icons/manage customers.svg'
import { ReactComponent as Team } from '../../../assets/icons/manageTeamIcon.svg'
import { ReactComponent as Invoice } from '../../../assets/icons/invoicing 2.svg'
import { ReactComponent as Salary } from '../../../assets/icons/salaryIcon.svg'
import { ReactComponent as Permission } from '../../../assets/icons/permission.svg'
import { ReactComponent as Payment } from '../../../assets/icons/paymentIcon.svg'


const DrawerList = ({ children }) => {
    console.log(children)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const classes = useStyles();
    const theme = useTheme();

    const { url } = useRouteMatch();
    const {pathname} = useLocation();
    console.log(pathname)

    const itemList = [
        {
            text: 'Dashboard',
            icon: <DashboardOutlined/>,
            keys: 'home',
            to: `${url}/home`,

        },
        {
            text: 'Appointment',
            icon: <AddCircleOutline />,
            keys: 'book',
            to: `${url}/book`,
        },
        {
            text: 'Manage Appointment',
            icon: <DateRangeOutlined/>,
            keys: 'appointments',
            to: `${url}/appointments`,
        },
        {
            text: 'Manage Customers',
            icon:  <SvgIcon><Customers/></SvgIcon>,
            keys: 'manageCutomer',
            to: `${url}/manageCutomer`,
        },
        {
            text: 'Invoices & Billing',
            icon:  <SvgIcon><Invoice/></SvgIcon>,
            keys: 'invoice',
            to: `${url}/invoice`,
        },
        {
            text: 'Manage Team',
            icon:  <SvgIcon><Team/></SvgIcon>,
            keys: 'manageTeam',
            to: `${url}/manageTeam`,
        },
        {
            text: 'Salary & Accounting',
            icon:  <SvgIcon><Salary/></SvgIcon>,
            keys: 'salary',
            to: `${url}/salary`,
        },
        {
            text: 'Access Roles',
            icon:  <SvgIcon><Permission/></SvgIcon>,
            keys: 'permissions',
            to: `${url}/permissions`,
        },
        {
            text: 'Payments',
            icon:  <SvgIcon><Payment/></SvgIcon>,
            keys: 'payments',
            to: `${url}/payments`,
        },

        {
            text: 'Settings',
            icon:  <SettingsOutlined/>,
            keys: 'settings',
            to: `${url}/settings`,

        },

        {
            text: 'Sign out',
            icon:  <ExitToAppOutlined/>,
            keys: 'signout',
            to: `/`,
        },

    ];


    const ListData = () => itemList.map((item, index) => {
        const { text, icon, to, keys } = item;

        return (

            <ListItem   className={classes.listItem}
                        button
                        key={keys}
                        to={to}
                        component={Link}
                        // selected={index === selectedIndex}
                        selected={pathname === to}
                        onClick={e => handleListItemClick(e, index)}
                        style={
                            // selectedIndex === index
                            pathname === to ? { background: theme.palette.primary.main,
                                                        width: 200,
                                                        marginLeft: 8,
                                                        paddingLeft: 10,
                                                        borderRadius: 4,
                                                        boxShadow: '2px 3px 6px rgba(0, 0, 0, 0.3)',

                            } : {}
                        }>
                <ListItemIcon
                    className={classes.iconStyle}
                                    style={
                                        // selectedIndex === index
                                        pathname === to ? { color: "#fff" } : {}
                                    }>{icon}
                <ListItemText>
                    <Typography component="div"
                                className={classes.iconTitle}
                                style={
                                    // selectedIndex === index
                                    pathname === to
                                    ? { color: "#fff" } : {}}>
                                        <Box fontWeight={700} fontSize={13.8} >{text}</Box>
                    </Typography>
                </ListItemText>
                </ListItemIcon>
            </ListItem>

        );
    });


    const handleListItemClick = (e, index) => {
        setSelectedIndex(index)
    };

    return (
        <div className={classes.root}>

        <ListData />



        </div>
    );
}

export default DrawerList;
