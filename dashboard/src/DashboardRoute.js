import { Switch, Redirect, Route, useRouteMatch } from "react-router-dom";
import NavBar from "./Pages/LayoutAppBarSideBar/NavBar";
import Home from "./Pages/DashboardPage/Home";
import AppointmentPage from "./Pages/Appointment/AppointmentPage";
import Invoice from "./Pages/Invoice/Invoice";
import React from "react";
import ManageAppointments from "./Pages/ManageAppointments/ManageAppointments";
import Employees from "./Pages/ManageTeam/Employees";
import Customers from "./Pages/ManageCustomers/Customers";
import SettingsPage from "./Pages/Settings/SettingsPage";
import Temp from "./Pages/TemporaryPage/Temp";
import SampleImages from "./Pages/Appointment/SampleImages";

const DashboardRoute = () => {
    const { path } = useRouteMatch();

    return (
        <>
            <NavBar>
                <Switch>
                    <Route path={`${path}/home`} component={Home} />

                    <Route path={`${path}/book`} component={AppointmentPage} />

                    <Route path={`${path}/appointments`} component={ManageAppointments} />


                    <Route path={`${path}/samples`} component={SampleImages} />


                    {/*<Route path={`${path}/manageCutomer`} component={ManageCustomers} />*/}
                    <Route path={`${path}/manageCutomer`} component={Customers} />

                    <Route path={`${path}/manageTeam`} component={Employees} />

                    <Route path={`${path}/invoice`} component={Invoice} />



                    <Route path={`${path}/salary`} >
                        <Temp title={"Salaries"} />
                    </Route>


                    <Route path={`${path}/permissions`} >
                        <Temp title={'Access role'}/>
                    </Route>

                    <Route path={`${path}/payments`} >
                        <Temp title={'Payment methods'}/>
                    </Route>

                    <Route path={`${path}/settings`}  component={SettingsPage} />


                    <Redirect to={`${path}/home`} />

                </Switch>
            </NavBar>

            </>
    );
}

export default DashboardRoute;
