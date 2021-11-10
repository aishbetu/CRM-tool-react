import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ToggleSwitch() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControlLabel
            control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary" />}
            // label={state.checkedA}
        />

    );
}
