import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // borderRadius: 8,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1.5, 1.5, 1, 1.5),
    },
    hairSample: {
        position: 'relative',
        zIndex: 1,
        top: theme.spacing(8),
        right: theme.spacing(1)
    },
    face: {
        position: 'relative',
        marginTop: theme.spacing(-14),
        // borderWidth: '40px 5px 5px 5px',
        // border: 'solid #fff'
    },
    // actionBtn: {
    //     position: "absolute",
    //     marginLeft: 480,
    //     marginTop: -45,
    //     borderRadius: 0,
    //     '& > button': {
    //         background: "transparent" // If you want button to be transparent
    //     }
    // }
}));

export default function PopupCard(props) {
    const classes = useStyles();
    const {openModal, handleClose, img, samples } = props;

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                            <div>
                                {/*<div className={classes.actionBtn}>*/}
                                {/*    <ActionButton*/}
                                {/*        // to edit icon functionality*/}
                                {/*        color="primary"*/}
                                {/*        onClick={handleClose}*/}
                                {/*    >*/}
                                {/*        <CloseOutlined fontSize="medium" />*/}
                                {/*    </ActionButton>*/}
                                {/*</div>*/}
                            <div >
                            <Grid container direction="column" >
                                <img src={samples} alt="Hair" width="340" className={classes.hairSample} />
                                <img src={img} alt="Samples" height="350" width="300"  className={classes.face} />
                            </Grid>
                            </div>
                            </div>
                </Fade>
            </Modal>
        </div>
    );
}
