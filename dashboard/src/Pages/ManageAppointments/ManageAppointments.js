import React from 'react';
import { Grid, Typography, Box, Paper, CssBaseline } from '@material-ui/core'
import AppointmentList from "./components/AppointmentList";
import {useStyles} from "./ManageAppointmentStyle";
import Title from "../../components/Title";

const ManageAppointments = () => {
    const classes = useStyles();
    const getAppointments = JSON.parse(localStorage.getItem('appoinmentData'))
    return (
        <>
            <Title title="CRM | Manage Appointment" />

        <div>
            <Grid container className={classes.root}>
                {getAppointments ?


                        <Grid item xs={12}>
                            <AppointmentList />
                        </Grid>




                    :
                        <Grid item xs={12}>
                    <Paper elevation={2} className={classes.emptyPaper} >
                        <Typography component="div">
                            <Box fontSize={24} fontWeight={700} >No appointments are available</Box>
                        </Typography>
                    </Paper>
                        </Grid>

                }

            </Grid>
        </div>
            <CssBaseline/>

            </>
    );
}

export  default ManageAppointments;
