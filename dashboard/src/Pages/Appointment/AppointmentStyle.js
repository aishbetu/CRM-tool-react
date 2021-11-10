import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    centerGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    paperStyle: {
        width: 850,
        borderRadius: 10,
        marginTop: theme.spacing(2)
    },
    formStyle: {
        margin: theme.spacing(3.5, 2, 1.5, 2),
    },
    inputFieldSelect: {
        margin: theme.spacing(1.5, 0),
        width: theme.spacing(35),
        "& .MuiFormHelperText-root": {
            marginLeft: 1,
            marginBottom: -15
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
            padding: 7,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: theme.palette.primary.light //when hover input text
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#000",
        },
        "& .MuiInputLabel-outlined": {
            color: "#000",
            margin: theme.spacing(0),
            fontSize: 13,
        },
        "&:hover .MuiInputLabel-outlined": {
            color: theme.palette.primary.light
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: theme.palette.primary.main,
            fontSize: 15,
            margin: "-2px 0 0 2px"
        },

    },
    inputField: {
        margin: theme.spacing(1.5, 0),
        width: theme.spacing(35),
        "& .MuiFormHelperText-root": {
            marginLeft: 1,
            marginBottom: -15
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
            padding: 7,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: theme.palette.primary.light //when hover input text
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#000",
        },
        "& .MuiInputLabel-outlined": {
            color: "#000",
            margin: theme.spacing(-1, 0),
            fontSize: 13,
        },
        "&:hover .MuiInputLabel-outlined": {
            color: theme.palette.primary.light
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: theme.palette.primary.main,
            fontSize: 15,
            margin: "-2px 0 0 2px"
        },

    },
    btn: {
        textTransform: 'none',
        margin: theme.spacing(2, 0),
        padding: theme.spacing(0.8, 5),
    },
    uploadIcon: {
        color: theme.palette.background.default,
        background: theme.palette.primary.main,
        "&:hover, &.Mui-focusVisible": {
            color: theme.palette.primary.main,
            // padding: theme.spacing(2),
            transition: 'ease-in 0.5s'
        },
        padding: theme.spacing(1),
        marginLeft: theme.spacing(1.5)
    }
}), {index: 1});

export {useStyles}
