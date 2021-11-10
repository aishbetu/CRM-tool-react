import React from 'react';
import {Grid, makeStyles} from '@material-ui/core'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import ToggleSwitch from "./components/ToggleSwitch";
import Title from "../../components/Title";

const useStyles = makeStyles(theme => ({
    paperStyle: {
        padding: theme.spacing(2, 0, 6, 0),
        margin: theme.spacing(0,1)
    },
    cardTitle: {
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        color: theme.palette.primary.main
    },
    cardTagline: {
        padding: theme.spacing(0.5, 0, 2.5, 2.2)

    },
    divider: {
        margin: theme.spacing(1.5)
    },
    switchContent: {
        marginTop: theme.spacing(1.2),
        paddingLeft: theme.spacing(3)
    }
}))

const SettingsPage = () => {
    const classes = useStyles();
    return (
        <>

            <Title title="CRM | Settings" />

                    <Paper elevation={2} square className={classes.paperStyle}>


                            <Typography component="div">
                                <Box fontSize={24} fontWeight={500} className={classes.cardTitle}>Notifications</Box>
                                <Box fontSize={14} className={classes.cardTagline}>We'll always let your customer know once you enable the notification alerts.</Box>
                            </Typography>
                        <Divider className={classes.divider} variant="middle" />

                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            className={classes.switchContent}
                        >
                            <Grid item xs={4}>
                                <Typography component="div">
                                    <Box fontSize={14} fontWeight={500}> Send alert by email</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <ToggleSwitch/>
                            </Grid>
                        </Grid>

                        <Divider className={classes.divider} variant="middle" />

                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            className={classes.switchContent}
                        >
                            <Grid item xs={4}>
                                <Typography component="div">
                                    <Box fontSize={14} fontWeight={500}> Send alert by phone</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <ToggleSwitch/>
                            </Grid>
                        </Grid>


                    </Paper>
            <CssBaseline />
        </>
    );
}

export default SettingsPage;
