import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import {Paper, Typography, Box, makeStyles, useTheme} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    paperStyle: {
        height: 320,
        width: 830,
        paddingTop: 10
    },
    bigCardTitle: {
        marginLeft: 15,
        color: "#777171"
    },
}));


const data = [
    {
        uv: 700,
        pv: 2400,
        amt: 2400
    },
    {
        uv: 1100,
        pv: 1398,
        amt: 2210
    },
    {
        uv: 2100,
        pv: 9800,
        amt: 2290
    },
    {
        uv: 2800,
        pv: 3908,
        amt: 2000
    },
    {
        uv: 2100,
        pv: 4800,
        amt: 2181
    },
    {
        uv: 2650,
        pv: 3800,
        amt: 2500
    },
    {
        uv: 1900,
        pv: 4300,
        amt: 2100
    }
];

export default function AreaChartMinimal() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Paper elevation={2} className={classes.paperStyle}>
            <Typography component="div">
                <Box fontSize={24} fontWeight={500} className={classes.bigCardTitle}>Total Sales</Box>
            </Typography>
        <AreaChart
            width={820}
            height={280}
            data={data}
            margin={{
                top: 15,
                right: 20,
                left: 10,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke={theme.palette.primary.dark} fill={theme.palette.primary.main} />
        </AreaChart>
        </Paper>
    );
}
