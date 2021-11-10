import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    customeBackground: {
        background: 'linear-gradient(170deg, #B5DBFF 30%, #5EFEC5)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card1: {
        background: '#fff',
        position: 'relative',
        top: 10,
        width: 400,
        height: 600,
        borderRadius: '10px 10px 10px 10px',
        boxShadow: '-5px 2px 8px rgba(0,0,0,0.1)'
    },

    card2: {
        background: '#edfaff',
        position: 'relative',
        top: 10,
        right: 10,
        width: 450,
        height: 600,
        borderRadius: '0 10px 10px 0',
        boxShadow: '5px 2px 8px rgba(0,0,0,0.1)'
    },
    spacingForm: {
        paddingTop: 30,
        paddingLeft: 42
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        position: 'relative',
        top: 45,
    },
    logo: {
        width: 'auto',
        height: 80
    },
    rightCardContainer: {
        display: 'flex',
        flexDirection: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 30,
        paddingTop: 70
    },
    svgTitleColor: {
        color: theme.palette.primary.dark,
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: 2
    },
    svgStyle: {
        height: 440,
        width: 'auto'
    }
}));

export { useStyles };
