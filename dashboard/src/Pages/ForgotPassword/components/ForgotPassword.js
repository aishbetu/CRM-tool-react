import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./ForgotPasswordStyle";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import {useHistory} from "react-router";
import {useFormik} from "formik";
import {validateSchema} from "../Validations/validateSchema";

const ForgotPassword = () => {
    const [email, setEmail] = useState()
    const classes = useStyles();
    const history = useHistory();

    const Formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            setEmail(values.email);
            console.log(email);
            history.push("/success")
        },
    });

    return (
        <div>
            <div className={classes.titleContainer}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Typography component="div">
                        <Box fontSize={22}
                             fontWeight={500}>
                            Password Reset
                        </Box>
                    </Typography>
                </Grid>
                <div className={classes.tagLineContainer}>
                    <Typography variant="caption" color="textSecondary" className={classes.tagLineStyle}>Enter your registered email to get password reset link.</Typography>
                </div>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">
                    <form noValidate
                          autoComplete="off"
                          className={classes.formContainer}
                          onSubmit={Formik.handleSubmit}>
                        <TextField
                            className={classes.inputStyle}
                            value={Formik.values.email}
                            onChange={Formik.handleChange}
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            error={Formik.touched.email && Boolean(Formik.errors.email)}
                            helperText={Formik.touched.email && Formik.errors.email}/>

                        <Button className={classes.btn} variant="contained" color="primary" type="submit">
                            Continue
                        </Button>
                    </form>
                </Grid>

                <Divider variant="middle" className={classes.vl} light />

                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">

                <div className={classes.linkStyle}>
                    <Link onClick={() => history.push("/")} variant="subtitle2" className={classes.linkStyle}>
                        Back To Home
                    </Link>
                </div>
                </Grid>

            </div>



        </div>
    );
}

export default ForgotPassword;
