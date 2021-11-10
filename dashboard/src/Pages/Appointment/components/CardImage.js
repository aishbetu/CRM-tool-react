import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 150,
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.8),
        borderRadius: theme.spacing(0),
        "&:hover": {
            backgroundColor: theme.palette.primary.extraLight,
            transition: 'ease-in-out 0.5s'
        },

    },
    hair: {
        height: 100,
        width: theme.spacing(22),
        marginTop: theme.spacing(-7),
        position: 'relative',
        top: theme.spacing(7),
        left: theme.spacing(0.8)
    },
    face: {
        height: 150,
        // borderRadius: theme.spacing(0.5)
    },
}));

export default function CardImage(props) {
    const { ImgData, handleOpen, samples } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3} raised={true}>
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    className={classes.hair}
                    image={samples}
                    title="Hair Sample"
                />

                <CardMedia
                    className={classes.face}
                    image={ImgData}
                    title="Customer Face"
                />
            </CardActionArea>
        </Card>
    );
}
