import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {useStyles} from "./LoginStyle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { LockOpenOutlined } from '@material-ui/icons';
import {useHistory} from "react-router";


import {validateSchema} from '../Validations/validateSchema'
import {useFormik} from "formik";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
    const history = useHistory();

    const Formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            // let data = localStorage.getItem('data');
            // let jsonToJs = JSON.parse(data);
            // if(jsonToJs.email === values.email){
                setEmail(JSON.stringify(values.email));
                setPassword(JSON.stringify(values.password));
                const data = { email: values.email };
                localStorage.setItem('loginData', JSON.stringify(data));

                // alert(JSON.stringify(values, null, 2));
                history.push("/dashboard")
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
                    <LockOpenOutlined className={classes.iconLock}/>
                <Typography component="div">
                    <Box fontSize={22}
                         fontWeight={500}>
                        Login Now.
                    </Box>
                </Typography>
                </Grid>
                <div className={classes.tagLineContainer}>
                    <Typography variant="caption" color="textSecondary" className={classes.tagLineStyle}>Login with your data that you entered during your registration.</Typography>
                </div>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">
                    <form noValidate autoComplete="off" onSubmit={Formik.handleSubmit} className={classes.formContainer}>
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

                        <TextField
                            className={classes.inputStyle}
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={Formik.values.password}
                            onChange={Formik.handleChange}
                            error={Formik.touched.password && Boolean(Formik.errors.password)}
                            helperText={Formik.touched.password && Formik.errors.password}/>


                        <Button className={classes.btn} variant="contained" color="primary" type="submit">
                            Log in
                        </Button>
                    </form>

                    <div className={classes.linkStyle}>
                        <Link variant="subtitle2" onClick={() => history.push("./forgot")} className={classes.linkStyle}>
                            Forget Password?
                        </Link>
                    </div>
                </Grid>

                <Divider variant="middle" className={classes.vl} light />

                <div className={classes.centerContent}>
                    <Button onClick={() => history.push("/signup")} className={classes.btnOutline} variant="outlined" color="primary">
                        Sign up
                    </Button>
                </div>


            </div>



        </div>
    )
};

export default LoginForm;
