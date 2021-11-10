import React, {useState} from 'react';
import { Paper, Grid, IconButton } from "@material-ui/core"
import ProfileAvatar from "./components/ProfileAvatar";
import { TextField, MenuItem, Button, Divider } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {useStyles} from "./AppointmentStyle";
import {useFormik} from "formik";
import { useHistory } from "react-router";
// import {validateSchema} from "./validations/validateSchema";
import InitialProfile from '../../assets/ProfileImage.png';
import DialogCropper from "./components/DialogCropper";
import Notification from "./components/Notification";
import {Helmet} from "react-helmet";


const salutationChoice = [
    {
        value: 'Mr',
    },
    {
        value: 'Mrs',
    },
    {
        value: 'Miss',
    },
    {
        value: 'Ms',
    },
];

const genderChoice = [
    {
        value: 'Male',
    },
    {
        value: 'Female',
    },
];

const statusChoice = [
    {
        value: 'Approve',
    },
    {
        value: 'Pending',
    },
    {
        value: 'Decline',
    },
];



const AppointmentPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [openDialog, setOpenDialog] = React.useState(false);
    const [profilePicture, setProfilePicture] = useState(InitialProfile);
    const [salutation, setSalutation] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [pinCode, setPinCode] = useState();
    const [status, setStatus] = useState();
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })




    const handleClickOpen = () => {
        setOpenDialog(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
    };



    const formik = useFormik({
        initialValues: {
            salutation: '',
            fname: '',
            lname: '',
            gender: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            pinCode: '',
            status: '',
    },
        // Comment out Below code to enable validation
        // validationSchema: validateSchema,
        onSubmit: values => {
            setSalutation(values.salutation);
            setFname(values.fname);
            setLname(values.lname);
            setGender(values.gender);
            setEmail(values.email);
            setPhone(values.phone);
            setAddress(values.address);
            setCity(values.city);
            setPinCode(values.pinCode);
            setStatus(values.status);

            const appoinmentData = {
                profilePicture: profilePicture,
                salutation: values.salutation,
                fname: values.fname,
                lname: values.lname,
                gender: values.gender,
                email: values.email,
                phone: values.phone,
                address: values.address,
                city: values.city,
                pinCode: values.pinCode,
                status: values.status,
            };
            localStorage.setItem('appoinmentData', JSON.stringify(appoinmentData));
            // alert(`Dear ${appoinmentData.fname} your appointment has been successfully created.`)
            setNotify({
                isOpen: true,
                message: 'Success! Please wait while we show you samples',
                type: 'success'
            });
            setProfilePicture(InitialProfile);
            formik.resetForm()
            setTimeout(() => {
                history.push("/dashboard/samples")
            },3000)

        },

    });

    //
    // const imageHandler = (e) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if(reader.readyState === 2) {
    //             setProfilePicture(reader.result)
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0])
    // }

    return (
        <>

            <Helmet>
                <title>CRM | Create Appointment</title>
            </Helmet>

        <div className={classes.centerGrid}>
        <Paper  className={classes.paperStyle}>
            <form noValidate onSubmit={formik.handleSubmit} className={classes.formStyle}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {/*Profile Picture Section*/}
                    <Grid item xs={12} sm={2}></Grid>
                    <Grid item xs={12} sm={12}>
                        <div className={classes.centerGrid}>
                        <ProfileAvatar imageSrc={profilePicture} />
                            {/*<input accept="image/*" style={{ display: 'none'}} id="icon-button-file" type="file" onChange={imageHandler} />*/}
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.uploadIcon} onClick={handleClickOpen}>
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </div>
                        <Divider variant="middle" style={{marginTop: 20, marginBottom: 20}} />
                    </Grid>


                    {/*Form Start here*/}
                    <Grid item xs={12} sm={6}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                            <TextField
                                className={classes.inputFieldSelect}
                                select
                                id="salutation"
                                name="salutation"
                                label="Salutation"
                                type="text"
                                variant="outlined"
                                size="small"
                                value={formik.values.salutation}
                                onChange={formik.handleChange}
                                error={formik.touched.salutation && Boolean(formik.errors.salutation)}
                                helperText={formik.touched.salutation && formik.errors.salutation}
                            >
                                {salutationChoice.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <div className={classes.centerGrid}>
                            <TextField
                                className={classes.inputField}
                                id="fname"
                                name="fname"
                                label="First Name"
                                type="text"
                                variant="outlined"
                                value={formik.values.fname}
                                onChange={formik.handleChange}
                                error={formik.touched.fname && Boolean(formik.errors.fname)}
                                helperText={formik.touched.fname && formik.errors.fname}
                            />
                        </div>
                    </Grid>




                    <Grid item xs={12} sm={6}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                            <TextField
                                className={classes.inputField}
                                id="lname"
                                name="lname"
                                label="Last Name"
                                type="text"
                                variant="outlined"
                                value={formik.values.lname}
                                onChange={formik.handleChange}
                                error={formik.touched.lname && Boolean(formik.errors.lname)}
                                helperText={formik.touched.lname && formik.errors.lname}
                            />
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <div className={classes.centerGrid}>
                            <TextField
                                className={classes.inputFieldSelect}
                                select
                                id="gender"
                                name="gender"
                                label="Gender"
                                variant="outlined"
                                size="small"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                error={formik.touched.gender && Boolean(formik.errors.gender)}
                                helperText={formik.touched.gender && formik.errors.gender}
                            >
                                {genderChoice.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </Grid>




                    <Grid item xs={12} sm={6}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                            <TextField
                                className={classes.inputField}
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <div className={classes.centerGrid}>
                            <TextField
                                className={classes.inputField}
                                id="phone"
                                name="phone"
                                label="Phone"
                                type="number"
                                variant="outlined"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                        </div>
                    </Grid>





                    <Grid item xs={12} sm={6}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                            <TextField
                                className={classes.inputField}
                                id="address"
                                name="address"
                                label="Address"
                                type="text"
                                variant="outlined"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <div className={classes.centerGrid}>
                            <TextField
                                className={classes.inputField}
                                id="city"
                                name="city"
                                label="City"
                                type="text"
                                variant="outlined"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                        </div>
                    </Grid>




                    <Grid item xs={12} sm={6}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                            <TextField
                                className={classes.inputField}
                                id="pinCode"
                                name="pinCode"
                                label="Pin Code"
                                type="number"
                                variant="outlined"
                                value={formik.values.pinCode}
                                onChange={formik.handleChange}
                                error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                                helperText={formik.touched.pinCode && formik.errors.pinCode}
                            />
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <div className={classes.centerGrid}>
                            <TextField
                                className={classes.inputFieldSelect}
                                select
                                id="status"
                                name="status"
                                label="Status"
                                variant="outlined"
                                size="small"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                error={formik.touched.status && Boolean(formik.errors.status)}
                                helperText={formik.touched.status && formik.errors.status}
                            >
                                {statusChoice.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </Grid>



                    <Grid item xs={12} sm={12}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Button
                                className={classes.btn}
                                size="large"
                                variant="contained"
                                color="primary"
                                // startIcon={<Add/>}
                                type="submit">
                                Save Appointment
                            </Button>

                        </div>
                    </Grid>



                </Grid>
            </form>

        </Paper>
        </div>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <DialogCropper
                setProfile={setProfilePicture}
                open={openDialog}
                setOpen={setOpenDialog}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
            />
            </>
    );
}

export default AppointmentPage;
