import React from 'react'
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        position: 'relative',
        left: theme.spacing(2.5),
        top: theme.spacing(0),
        margin: theme.spacing(0.5),
        // padding: theme.spacing(1)
    },
    secondary: {
        backgroundColor: theme.palette.primary.main,
        '& .MuiButton-label': {
            color: theme.palette.background.default,
        },
        '& .MuiButton-label:hover': {
            color: theme.palette.secondary.main,
            backgroundColor: "none",
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        '& .MuiButton-label': {
            color: theme.palette.background.default,
        },
        '& .MuiButton-label:hover': {
            color: theme.palette.primary.main,
        }
    },
}))

export default function ActionButton(props) {

    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button
            disableRipple
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Button>
    )
}
