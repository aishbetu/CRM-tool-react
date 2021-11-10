import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import {ReactComponent as ForgotPasswordSVG} from "../../assets/ForgotPassword.svg";
import {useStyles} from "./ForgotPasswordStyle";
import ForgotPassword from "./components/ForgotPassword";
import logo from "../../assets/PossifyIcon.png";
import Title from "../../components/Title";

const ForgotPasswordPage = () => {
    const classes = useStyles();
    return (
        <>
            <Title title="CRM | Forgot Password" />
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.customeBackground}
        >
            <div className={classes.card1}>

                <div className={classes.spacingForm}>
                    <ForgotPassword />
                </div>

            </div>

            <Box component="div" display={{ sm: 'none', md: 'block' }} className={classes.card2}>
                <div className={classes.logoContainer}>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    {/*<Logo className={classes.logo} />*/}
                </div>
                <div className={classes.rightCardContainer}>
                    <Typography variant="h4" className={classes.svgTitleColor}>Lost Password?</Typography>
                </div>
                <SvgIcon className={classes.svgStyle}>
                    <ForgotPasswordSVG/>
                </SvgIcon>
            </Box>

        </Grid>
            </>
    );
}

export  default ForgotPasswordPage;
