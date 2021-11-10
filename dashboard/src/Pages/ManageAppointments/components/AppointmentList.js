import React, {useState} from "react";
import MaterialTable from 'material-table'
import { makeStyles } from "@material-ui/core/styles";
import { forwardRef } from 'react';
import {Avatar, Paper, Typography} from "@material-ui/core";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Box from "@material-ui/core/Box";



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} style={{color: '#00C851'}} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} style={{color: '#ff4444'}} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} style={{color: '#ff4444'}} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <EditOutlinedIcon {...props} ref={ref} style={{color: '#00C851'}} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} style={{color: '#1993eb'}} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};




const useStyles = makeStyles(theme => ({
    rootTable: {
        // '& .MuiIconButton-colorInherit' : {
        //     color: '#6a2cd8'
        // },
        // width: theme.spacing(158),
        // margin: theme.spacing(0, 1),
        "& .MuiToolbar-gutters": {
            paddingLeft: 11,
            // fontSize: '1rem',
            // fontWeight: 900
            },
        "& .MuiTypography-root": {
            fontSize: '17px',
        },
        "& tbody tr:hover" : {
            backgroundColor: '#fffbf2',
            cursor: 'pointer'
        }
        },
    successIcon: {
        color: 'rgba(93,247,204,1)',
        backgroundColor: 'rgba(93,247,204,0.1)',
        width: '70%',
        padding: theme.spacing(0.25, 0, 0.25, 0),
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    PendingIcon: {
        color: 'rgba(243, 156, 18, 1)',
        background: 'rgba(243, 156, 18, 0.1)',
        width: '70%',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));


const AppointmentList = () => {
    const getAppointments = JSON.parse(localStorage.getItem('appoinmentData'))
    // console.log(getAppointments)
    let nameData = ''
    let name = nameData.concat(getAppointments.salutation, " ", getAppointments.fname, " ", getAppointments.lname)
    // console.log(nameData.concat(getAppointments.salutation, " ", getAppointments.fname, " ", getAppointments.lname))
    let finalData = {...getAppointments, name}
    console.log("mah data", finalData);
    const [data, setData] = useState([finalData]);
    const classes = useStyles();

    const columns = [
        { title: "Profile", field: "profilePicture", render: (row) => <Avatar alt={row.profilePicture} src={row.profilePicture} />},
        // { title: "Salutation", field: "salutation"},
        // { title: "First Name", field: "fname"},
        // { title: "Last Name", field: "lname" },
        { title: "Name", field: "name"},
        // { title: "Gender", field: "gender" },
        { title: "Email", field: "email" },
        { title: "Phone", field: "phone" },
        // { title: "Address", field: 'address'},
        // { title: "City", field: "city", },
        // { title: "Pin", field: "pinCode", },
        { title: "Status", field: "status", render: row => <Typography component="div">{ row.status === 'Approve' ? <Box fontSize={14} className={classes.successIcon}>{row.status}</Box> : <Box fontSize={14} className={classes.PendingIcon}>{row.status}</Box>  }</Typography> },
    ];
    return (

        <div className={classes.rootTable}>
            <MaterialTable
                title="Appointments"
                components={{
                    Container: props => <Paper {...props}  />
                }}
                icons={tableIcons}
                data={data}
                columns={columns}
                editable={{
                    // onRowAdd: (newRow) => new Promise((resolve, reject) => {
                    //     const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }];
                    //     setTimeout(() => {
                    //         setData(updatedRows);
                    //         resolve()
                    //     }, 2000)
                    // }),
                    onRowDelete: selectedRow => new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows.splice(index, 1)
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                    }),
                    onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
                        const index=oldRow.tableData.id;
                        const updatedRows=[...data]
                        updatedRows[index]=updatedRow
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                    })

                }}
                options={{
                    actionsColumnIndex: -1, addRowPosition: "first",
                    draggable: false,
                    headerStyle:{
                        top: 0,
                        fontWeight: 450,
                        padding: 12,
                    },
                    rowStyle: {
                        fontWeight: 100,
                    },

                    actionsCellStyle: {
                        paddingRight: 10
                    },
                }}
            />

        </div>

    );
}

export default AppointmentList;
