import React, { useState } from 'react';
import MaterialTable from 'material-table'
import makeStyles from "@material-ui/core/styles/makeStyles";

import { forwardRef } from 'react';
import { Avatar, Button } from "@material-ui/core";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} style={{color: '#00C851'}} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} style={{color: '#ff4444'}} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} style={{color: '#ff4444'}} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: '#FF8800'}} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} style={{color: '#6a2cd8'}} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(theme => ({
    rootTable: {
    '& .MuiIconButton-colorInherit' : {
        color: '#6a2cd8'
    }
}
}));

const customersList = [
    { id: 1, name: "Aishwary", email: 'aish@gmail.com', phone: 9800126578, city: "Delhi" },
    { id: 2, name: "Rajnesh", email: 'raj@gmail.com', phone: 9812345678, city: "Pune" },
    { id: 3, name: "Shweta", email: 'shweta@gmail.com', phone: 7896536289, city: "Gurugram" },
    { id: 4, name: "Vikas", email: 'vikas@gmail.com', phone: 9087126354, city: "Gurugram" },
];

const CustomersList = () => {
    const classes = useStyles();
    const [data, setData] = useState(customersList);
    const columns = [
        { title: "ID", field: "id", editable: false },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone Number", field: 'phone', },
        { title: "City", field: "city", }
    ];


    return (
        <div className={classes.rootTable}>
            <MaterialTable
                title="Customers"
                icons={tableIcons}
                data={data}
                columns={columns}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }];
                        setTimeout(() => {
                            setData(updatedRows);
                            resolve()
                        }, 2000)
                    }),
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
                    actionsColumnIndex: -1, addRowPosition: "first"
                }}
            />
        </div>
    );
};

export default CustomersList;
