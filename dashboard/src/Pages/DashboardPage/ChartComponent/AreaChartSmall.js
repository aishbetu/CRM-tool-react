import React from "react";
import { AreaChart, Area } from "recharts";
import { Paper, Typography, Grid, useTheme } from "@material-ui/core";

const data = [
    {
        name: "Page A",
        uv: 500,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 2500,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 1500,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 3500,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 3700,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2500,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 4000,
        pv: 4300,
        amt: 2100
    }
];

export default function AreaChartSmall() {
    const theme = useTheme();
    return (
        <Paper elevation={2} style={{width: 408, marginTop: 17}}>
            <Typography variant="h6" style={{paddingTop: 5, paddingLeft: 10, color: '#777171'}}>Profits</Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-end">
        <AreaChart
            width={380}
            height={260}
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 10
            }}
        >
            <Area type="monotone" dataKey="uv" stroke={theme.palette.primary.dark} fill={theme.palette.primary.main} />
        </AreaChart>
            </Grid>
        </Paper>
    );
}
