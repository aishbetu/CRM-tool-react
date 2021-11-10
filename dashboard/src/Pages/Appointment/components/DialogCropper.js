import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import ImageCropperTool from "./ImageCropperTool";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Box, makeStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    dialogTitle: {
        padding: theme.spacing(1,1,0.5,1)
    },
    dialogContent: {
        margin: theme.spacing(5,5)
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCropper(props) {
    const { setProfile, open,  handleClose } = props;
    const classes = useStyles();


    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            // disableBackdropClick
            // disableEscapeKeyDown
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>Select A Picture</DialogTitle>
            <Divider variant="middle" light />
            <DialogContent className={classes.dialogContent}>
                <Typography component="div">
                    <Box fontWeight={100} style={{textAlign: 'center'}}>Please choose an image with straight face for better results.</Box>
                </Typography>
                <ImageCropperTool setProfile={setProfile} />
            </DialogContent>
            <Divider variant="middle" light />
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}
