import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    titleContainer: {
        marginTop: theme.spacing(2),
        marginLeft: 60,
        color: theme.palette.primary.dark,
    },
    formContainer: {
        marginTop: theme.spacing(2)
    },
    tagLineStyle: {
        color: '#878585e6',
    },
    tagLineContainer: {
        width: 220,
        marginTop: theme.spacing(1)
    },
    inputStyle: {
        minHeight: 8,
        width: 250,
        margin: '10px 0',
        "& .MuiFormHelperText-root": {
            marginLeft: 1
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
        padding: '3px 100px'
    },
    btnOutline: {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        '&:hover': {
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark,
        },
        borderRadius: 20,
        textTransform: 'none',
        marginRight: 48,
        marginTop: theme.spacing(1.5),
        padding: '4px 50px'
    },
    centerContent: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 22
    },
    '& .MuiFormHelperText-contained': {
       marginLeft: 1
    },

    vl: {
        position: 'relative',
        right: 41,
        top: 1,
        marginTop: theme.spacing(3),
        backgroundColor: '#ececec66'
    }
}),{index: 1}); // {index: 1} used to fix the bug which was preventing useStyles to be execute.

export { useStyles };
