import React from "react";
import { Switch, Route } from 'react-router-dom';
import {useStyles} from './AppStyle'
import SignupPage from "../Signup/SignupPage";
import LoginPage from "../Login/LoginPage";
import ForgotPasswordPage from "../ForgotPassword/ForgotPasswordPage";
import PasswordSuccessPage from "../ForgotPassword/PasswordSuccessPage";
import DashboardRoute from "../../DashboardRoute";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1993eb",
            light: '#69c3ff',
            dark: '#0066b8',
            extraLight: '#e0f2ff'
        },
        secondary: {
            main: "#f83245",
            light: '#ff6d70',
            dark: '#bd001e'

        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        }
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    }
})



function App(props) {
  const classes = useStyles(props);
  return (
      <ThemeProvider theme={theme}>
    <div className={classes.root}>
        <Switch>

            <Route path="/dashboard" component={DashboardRoute} />

            <Route path="/signup" component={SignupPage} />

            <Route path="/forgot" component={ForgotPasswordPage} />

            <Route path="/success" component={PasswordSuccessPage} />

            <Route path="/" exact component={LoginPage} />

        </Switch>
    </div>
      </ThemeProvider>
  );
}
export default App;
