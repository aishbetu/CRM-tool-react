import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     '& > *': {
    //         margin: theme.spacing(1),
    //     },
    // },

    root: {
        height: theme.spacing(12),
        width: theme.spacing(12)
    }
}));


const ProfileAvatar = (props) => {
    const classes = useStyles();

    return (
        <Avatar className={classes.root} src={props.imageSrc} />
    );
}

export default ProfileAvatar;
