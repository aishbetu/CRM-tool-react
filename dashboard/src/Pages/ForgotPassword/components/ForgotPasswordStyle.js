import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    titleContainer: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(3),
        color: theme.palette.primary.dark,
    },
    tagLineContainer: {
        width: 220,
        height: 'auto',
        marginTop: theme.spacing(1),
    },
    tagLineStyle: {
        color: '#878585e6',
    },
    formContainer: {
        marginTop: theme.spacing(5)
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
        padding: '3px 97px'
    },
    linkStyle: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.dark,
            textDecoration: 'none'
        },
        marginTop: theme.spacing(4),
        position: 'relative',
        right: 24
    },
    vl: {
        position: 'relative',
        right: 41,
        top: theme.spacing(2),
        marginTop: theme.spacing(3),
        backgroundColor: '#ececec66'
    }
}));

export { useStyles };
