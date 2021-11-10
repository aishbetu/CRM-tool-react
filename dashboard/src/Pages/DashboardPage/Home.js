import React from "react";
import {useStyles} from "./HomeStyle";
import Grid from "@material-ui/core/Grid";
import CalendarCard from "./components/CalendarCard";
import AreaChartMinimal from "./ChartComponent/AreaChartMinimal";
import BarChartMinimal from "./ChartComponent/BarChartMinimal";
import LineChartMinimal from "./ChartComponent/LineChartMinimal";
import AreaChartSmall from "./ChartComponent/AreaChartSmall";
import CssBaseline from "@material-ui/core/CssBaseline";
import Title from "../../components/Title";

const Home = () => {
    const classes = useStyles();
    return (
        <>

            <Title title="CRM | Dashboard" />

            <div className={classes.root}>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >

            <Grid item xs={12} sm={8}>
                <AreaChartMinimal/>
            </Grid>


            <Grid item xs={12} sm={4}>
                    <CalendarCard/>
            </Grid>

            <Grid item xs={12} sm={4}>
                        <BarChartMinimal/>
            </Grid>


            <Grid item xs={12} sm={4}>
                            <LineChartMinimal/>
            </Grid>

            <Grid item xs={12} sm={4}>
                        <AreaChartSmall/>
            </Grid>




        </Grid>

    </div>
            <CssBaseline />
        </>

    );
}

export default Home;
