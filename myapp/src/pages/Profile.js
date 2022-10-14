import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfilePage() {

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexGrow: 1, height: "100vh", color: "#03e9f4", fontSize: "35px", flexDirection: "column" }}>
            <p style={{ color: "white" }}>You agree to all the rules of the chat</p>
            <ControlledCheckbox />
        </div>
    )
}

export function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(false);
    const isChecked = useSelector(state => state)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setChecked(event.target.checked);
        dispatch({type:'SWITCH_PROFILE'});
    };

    console.log(isChecked)

    return (
        <Checkbox
            checked={checked}
            value={isChecked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}
