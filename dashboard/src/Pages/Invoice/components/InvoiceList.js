import React, { useState } from 'react';
import MaterialTable from 'material-table'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { forwardRef } from 'react';
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

const useStyles = makeStyles(theme => ({
    rootTable: {
        // '& .MuiIconButton-colorInherit' : {
        //     color: '#6a2cd8'
        // },
        "& .MuiToolbar-gutters": {
            paddingLeft: 11,
            fontWeight: 900
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
        width: '45%',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    PendingIcon: {
        color: 'rgba(243, 156, 18, 1)',
        background: 'rgba(243, 156, 18, 0.1)',
        width: '45%',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    }
}), {index: 1});


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




const customersList = [
    { id: 2003154, name: "Aishwary", date: "06/04/2021", due: "06/05/2021", sum: 250, status: true  },
    { id: 2005309, name: "Rajnesh", date: "03/04/2020", due: "14/09/2021", sum: 530, status: false },
    { id: 1240325, name: "Shweta", date: "02/02/2021", due: "12/07/2021", sum: 302, status: true },
    { id: 4357779, name: "Vikas", date: "01/09/2020", due: "05/04/2021", sum: 982, status: false },
];

const InvoiceList = () => {
    const classes = useStyles();
    const [data, setData] = useState(customersList);
    const columns = [
        { title: "Number", field: "id", editable: false },
        { title: "Client", field: "name" },
        { title: "Date", field: "date" },
        { title: "Due Date", field: 'due', },
        { title: "Sum", field: "sum", render: (row) => <div>{'\u20B9'} {row.sum}</div>},
        { title: "Status", field: "status", render: (row) => <Typography component="div">{ row.status ? <Box fontSize={14} className={classes.successIcon}>Paid</Box> : <Box fontSize={14} className={classes.PendingIcon}>Pending</Box>  }</Typography>}
    ];


    return (
        <div className={classes.rootTable}>
            <MaterialTable
                title="Invoices"
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
};

export default InvoiceList;
