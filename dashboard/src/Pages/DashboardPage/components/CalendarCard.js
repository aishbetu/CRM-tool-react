import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Paper from '@material-ui/core/Paper'
import './calendarStyle.css'



const CalendarCard = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }

    return (
        <div>
            <Paper elevation={2} style={{width: 407, height: 320, padding: 10}}>
            <Calendar onChange={onChange}  value={date} />
            </Paper>
        </div>
    );
}

export default CalendarCard;
