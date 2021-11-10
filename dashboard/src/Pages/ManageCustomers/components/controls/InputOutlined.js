import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, size, placeholder, value,error=null, onChange, ...other } = props;
    return (
        <TextField

            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
            size={size || 'large'}
        />
    )
}
