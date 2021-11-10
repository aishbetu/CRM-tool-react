import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    // tableContainer: {
    //     // height: theme.spacing(90),
    //     // width: 'auto',
    // },
}));

export {useStyles}
