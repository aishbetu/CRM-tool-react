import React, { useState } from 'react'
import CustomerForm from "./CustomerForm";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./components/useTable";
import * as customerServices from "./services/customerServices";
import Controls from "./components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "./components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "./components/Notification";
import ConfirmDialog from "./components/ConfirmDialog";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Title from "../../components/Title";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(7.5,1,1.5,1),
        padding: theme.spacing(1)
    },
    searchInput: {
        width: '100%',

    },
    newButton: {
        position: 'absolute',
        right: '10px',
        margin: theme.spacing(0.5, 0),
    }
}))


const headCells = [
    { id: 'fullName', label: 'Customer Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'city', label: 'City'},
    { id: 'actions', label: 'Actions', disableSorting: true },
]

export default function Employees() {

    const classes = useStyles();
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(customerServices.getAllCustomers())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (customer, resetForm) => {
        if (customer.id === 0)
            customerServices.insertCustomer(customer)
        else
            customerServices.updateCustomer(customer)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(customerServices.getAllCustomers())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        customerServices.deleteCustomer(id);
        setRecords(customerServices.getAllCustomers())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }


    return (
        <>

           <Title title="CRM | Customers" />


            <Controls.Button
                text="Customer"
                variant="contained"
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
            />
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Grid container direction="row" justify="center" alignContent="center">
                        <Grid item xs={9}>
                            <Typography variant="h6" style={{marginLeft: -20}}>Customers</Typography>
                        </Grid>
                        <Grid item xs={3}>

                    <Controls.InputOutlined
                        placeholder="Search Customers"
                        size="small"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search color="primary" />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />

                        </Grid>
                    </Grid>

                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell align="center">
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Confirm Deletion',
                                                    subTitle: "Are you sure you want to continue?",
                                                    onConfirm: () => { onDelete(item.id) }
                                                })
                                            }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="Customer Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <CustomerForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}
