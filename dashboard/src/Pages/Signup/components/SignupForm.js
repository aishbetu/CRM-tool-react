import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useStyles } from "./SignupFormStyle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router";
import { validateSchema } from '../Validations/validateSchema'
import { useFormik } from "formik";

const SignupForm = () => {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            setName(JSON.stringify(values.name));
            setEmail(JSON.stringify(values.email));
            setPassword(JSON.stringify(values.password));

            console.log(name);
            console.log(email);
            console.log(password);
            const data = { email: values.email, name: values.name };
            localStorage.setItem('signupData', JSON.stringify(data));
            // alert(JSON.stringify(values, null, 2));
            history.push("/dashboard")
        },
    });

    return (
        <div>
            <div className={classes.titleContainer}>
                <Typography component="div">
                    <Box fontSize={22}
                        fontWeight={500}>
                        Sign Up Now.
                </Box>
                </Typography>
                <div className={classes.tagLineContainer}>
                    <Typography variant="caption" color="textSecondary" className={classes.tagLineStyle}>Register now to start getting benefits from HB</Typography>
                </div>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <form autoComplete="off" noValidate className={classes.formContainer} onSubmit={Formik.handleSubmit}>
                        <TextField value={Formik.values.name}
                            onChange={Formik.handleChange}
                            className={classes.inputStyle}
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            variant="outlined"
                            error={Formik.touched.name && Boolean(Formik.errors.name)}
                            helperText={Formik.touched.name && Formik.errors.name} />

                        <TextField
                            value={Formik.values.email}
                            onChange={Formik.handleChange}
                            className={classes.inputStyle}
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            error={Formik.touched.email && Boolean(Formik.errors.email)}
                            helperText={Formik.touched.email && Formik.errors.email} />

                        <TextField
                            value={Formik.values.password}
                            onChange={Formik.handleChange}
                            className={classes.inputStyle}
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={Formik.touched.password && Boolean(Formik.errors.password)}
                            helperText={Formik.touched.password && Formik.errors.password} />

                        <TextField
                            value={Formik.values.confirmPassword}
                            onChange={Formik.handleChange}
                            className={classes.inputStyle}
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            error={Formik.touched.confirmPassword && Boolean(Formik.errors.confirmPassword)}
                            helperText={Formik.touched.confirmPassword && Formik.errors.confirmPassword} />


                        <Button className={classes.btn} variant="contained" color="primary" type="submit">
                            Sign up
                    </Button>
                    </form>

                </Grid>

                <Divider variant="middle" className={classes.vl} light />

                <div className={classes.centerContent}>
                    <Button onClick={() => history.push("/")} className={classes.btnOutline} variant="outlined" color="primary">
                        Log in
                    </Button>
                </div>

            </div>



        </div>
    )
};

export default SignupForm;
