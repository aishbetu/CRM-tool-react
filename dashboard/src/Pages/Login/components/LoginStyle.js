import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    titleContainer: {
        marginTop: theme.spacing(2),
        marginLeft: 20,
        color: theme.palette.primary.dark,
    },
    formContainer: {
        marginTop: theme.spacing(5)
    },
    iconLock: {
       fontSize: theme.spacing(3),
        marginRight: theme.spacing(1)
    },
    tagLineStyle: {
        color: '#878585e6',
    },
    tagLineContainer: {
        width: 220,
        height: 'auto',
        marginTop: theme.spacing(1),
    },
    inputStyle: {
        minHeight: 8,
        width: 250,
        margin: '10px 0',
        "& .MuiFormHelperText-root": {
            marginLeft: 1,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9b999966"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main
        },
        "& .MuiOutlinedInput-input": {
            color: "#000", //when see input text
            padding: 7
        },
        "&:hover .MuiOutlinedInput-input": {
            color: theme.palette.primary.light //when hover input text
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#000"
        },
        "& .MuiInputLabel-outlined": {
            color: "#000",
            margin: '-10px -10px -10px -3px',
            fontSize: 13,
        },
        "&:hover .MuiInputLabel-outlined": {
            color: theme.palette.primary.light
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: theme.palette.primary.main,
            fontSize: 15,
            margin: "-2px 0 0 2px"
        }
    },
    btn: {
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            background: theme.palette.primary.dark,
        },
        textTransform: 'none',
        marginTop: 20,
        padding: '3px 105px'
    },
    btnOutline: {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        '&:hover': {
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark
        },
        borderRadius: 20,
        textTransform: 'none',
        marginTop: theme.spacing(6),
        padding: '4px 50px'
    },
    linkStyle: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.dark,
            textDecoration: 'none'
        },
        marginTop: theme.spacing(4),
        position: 'relative',
        right: 21
    },
    centerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 43,
        top: 30
    },

    vl: {
        position: 'relative',
        right: 38,
        top: theme.spacing(5),
        backgroundColor: '#cacaca66'
    }
}));

export { useStyles };
