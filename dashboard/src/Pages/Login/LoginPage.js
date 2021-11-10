import React from "react";
import { useStyles } from "./LoginStyle"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";

import { ReactComponent as POS } from '../../assets/POS.svg';
import logoNew from '../../assets/PossifyIcon.png';

import LoginForm from "./components/LoginForm";
import Title from "../../components/Title";

const LoginPage = (props) => {
    const classes = useStyles(props);
    return (
        <>
            <Title title="CRM | Login" />
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.customeBackground}
        >
            <div className={classes.card1}>

                <div className={classes.spacingForm}>
                    <LoginForm/>
                </div>

            </div>

            <Box component="div" display={{ sm: 'none', md: 'block' }} className={classes.card2}>
                <div className={classes.logoContainer}>
                    <img src={logoNew} className={classes.logo} alt="logo"/>
                    {/*<Logo className={classes.logo} />*/}
                </div>
                <div className={classes.rightCardContainer}>
                    <Typography variant="h4" className={classes.svgTitleColor}>Welcome Back</Typography>
                </div>

                <SvgIcon className={classes.svgStyle}>
                    <POS/>
                </SvgIcon>
            </Box>

        </Grid>
            </>
    );
};

export default LoginPage;
