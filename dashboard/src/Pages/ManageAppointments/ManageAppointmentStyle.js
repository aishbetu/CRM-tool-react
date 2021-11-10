import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    emptyPaper: {
        height: theme.spacing(30),
        width: theme.spacing(60),
        marginTop: theme.spacing(22),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase'
    },
    tablePaper: {
        marginTop: theme.spacing(1)
    },
    root: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
}));

export {useStyles};
