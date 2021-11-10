import React, { useState } from 'react'
import EmployeeForm from "./EmployeeForm";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./components/useTable";
import * as employeeService from "./services/employeeService";
import Controls from "./components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "./components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "./components/Notification";
import ConfirmDialog from "./components/ConfirmDialog";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Title from "../../components/Title";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(7.5,1,1.5,1),
        padding: theme.spacing(1)
    },
    searchInput: {
        width: '100%'
    },
    newButton: {
        position: 'absolute',
        right: '10px',
        margin: theme.spacing(0.5, 0),
    },
}))


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Employees() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
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

    const addOrEdit = (employee, resetForm) => {
        if (employee.id === 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
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
        employeeService.deleteEmployee(id);
        setRecords(employeeService.getAllEmployees())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }

    return (
        <>

            <Title title="CRM | Manage Team" />

            <Controls.Button
                text="Employee"
                variant="contained"
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
            />
            <Paper className={classes.pageContent}>

                <Toolbar>
                    <Grid container direction="row" justify="center" alignContent="center">
                        <Grid item xs={9}>
                            <Typography variant="h6" style={{marginLeft: -20}}>Team</Typography>
                        </Grid>
                        <Grid item xs={3}>

                    <Controls.InputOutlined
                        placeholder="Search Employees"
                        size="small"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
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
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell align="center">
                                        <Controls.ActionButton
                                            // to edit icon functionality
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            // to delete icon functionality

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
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm
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
