import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Bg from '../../assets/TempBG.png';
import { NotificationsOutlined } from '@material-ui/icons'
import Timer from './components/Timer';
import Title from "../../components/Title";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0.5, 1),
        height: '60vh',
    },
    rootPaper: {
        background: `url(${Bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 'inherit'

    },

    paper: {
        color: '#fff',
        background: 'linear-gradient(to top, rgb(17, 17, 17), rgba(17, 17, 17, .4))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 'inherit'

    }
}))

const Temp = (props) => {
    const { title } = props
    const classes = useStyles();
    return (
        <>
            <Title title={`CRM | ${title}`} />

        <div className={classes.root}>
        <Paper className={classes.rootPaper}>
            <div className={classes.paper}>
                <Typography component="div">
                    <Box fontSize={34} fontWeight={700}>{title} will be available soon</Box>
                </Typography>

                 <Timer />

                <Button
                    style={{marginTop: 30}}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<NotificationsOutlined />}
                >
                    NotiFy Me
                </Button>
            </div>
        </Paper>
        </div>
            </>
    );
}

export default Temp;
