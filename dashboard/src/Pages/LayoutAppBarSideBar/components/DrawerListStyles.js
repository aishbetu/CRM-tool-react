import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),

    },
    iconStyle: {
        margin: theme.spacing(0, 0),
        color: '#676767',
    },
    iconTitle: {
        margin: theme.spacing(0, 0, 0, 1),
        color: '#676767',
    },
    listItem: {
        "&.Mui-selected": { // it is used to change external svg color during click
            "& path": {
                fill: "#fff"
            },
            margin: theme.spacing(1.5, 1)

        }
    },
}));

export {useStyles};
