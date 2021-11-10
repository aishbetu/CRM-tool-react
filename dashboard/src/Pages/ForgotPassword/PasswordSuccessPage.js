import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import {ReactComponent as ForgotPassword} from "../../assets/ForgotPassword.svg";
import {useStyles} from "./PasswordSuccessStyle";
import Button from "@material-ui/core/Button";
import { Drafts } from '@material-ui/icons'
import {useHistory} from "react-router";
import logo from "../../assets/PossifyIcon.png";
import Title from "../../components/Title";

const PasswordSuccessPage = () => {
    const classes = useStyles();
    const history = useHistory()
    return (
        <>
            <Title title="CRM | Success" />
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.customeBackground}
        >
            <div className={classes.card1}>
                <div className={classes.leftContainer}>

                    <Drafts className={classes.iconStyle}/>

                    <Typography component="div" className={classes.titleContainer}>
                    <Box fontSize={20}
                         fontWeight={500}
                         className={classes.title}   >
                        Check your mail
                    </Box>
                        <Box fontSize={12}
                             fontWeight={300}
                             className={classes.title}   >
                        We have sent a password recover instructions to your email.
                        </Box>

                </Typography>

                    <Button className={classes.btn}
                            onClick={() => history.push("/")}
                            variant="contained"
                            color="primary"
                            type="submit">
                        Back To Home
                    </Button>

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
                    <ForgotPassword/>
                </SvgIcon>
            </Box>

        </Grid>
            </>
    );
}

export  default PasswordSuccessPage;
