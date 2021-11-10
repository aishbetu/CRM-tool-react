import React from "react";
import { BarChart, Bar } from "recharts";
import { Paper, Typography, Grid, useTheme } from "@material-ui/core";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export default function BarChartMinimal() {
    const theme = useTheme();
    return (
        <Paper elevation={2} style={{width: 410, marginTop: 17}}>
            <Typography variant="h6" style={{paddingTop: 5, paddingLeft: 10, color: '#777171'}}>Daily Sales</Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-end"
                style={{paddingBottom: 10}}>
        <BarChart width={400} height={250} data={data}>
            <Bar dataKey="uv" fill={theme.palette.primary.main} />
        </BarChart>
            </Grid>
        </Paper>
    );
}
