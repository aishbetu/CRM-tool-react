import React from "react";
import { useStyles } from "./SignupStyle"
import Grid from "@material-ui/core/Grid";
import SignupForm from "./components/SignupForm";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";

import { ReactComponent as POS } from '../../assets/POS.svg';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
import Logo from '../../assets/PossifyIcon.png';
import Title from "../../components/Title";


const SignupPage = (props) => {
    const classes = useStyles(props);
    return (
        <>
            <Title title="CRM | Signup" />

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.customeBackground}
            >
                <div className={classes.card1}>

                    <div className={classes.spacingForm}>
                        <SignupForm/>
                    </div>

                </div>

                <Box component="div" display={{ sm: 'none', md: 'block' }} className={classes.card2}>
                    <div className={classes.logoContainer}>
                        <img src={Logo} className={classes.logo} alt="logo"/>
                        {/*<Logo className={classes.logo}/>*/}
                    </div>
                    <div className={classes.rightCardContainer}>
                        <Typography variant="h4" className={classes.svgTitleColor}>Welcome</Typography>
                    </div>

                    <SvgIcon className={classes.svgStyle}>
                        <POS/>
                    </SvgIcon>
                </Box>

            </Grid>
            </>
    );
};

export default SignupPage;
