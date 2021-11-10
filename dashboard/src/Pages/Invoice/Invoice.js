import React from 'react';
import {Grid} from "@material-ui/core";
import {useStyles} from "./InvoiceStyle";
import InvoiceList from "./components/InvoiceList";
import Title from "../../components/Title";

const Invoice = () => {
    const classes = useStyles();
    return (
        <>
            <Title title="CRM | Invoices" />

            <Grid container className={classes.root}>
                <Grid item xs={12}>
                       <InvoiceList
                           // className={classes.tableContainer}
                       />
                </Grid>
            </Grid>
        </>
    );
}

export default Invoice;
