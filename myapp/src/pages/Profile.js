import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { switchProfile } from '../slices/slices'

export default function ProfilePage() {

    return (
        <div className='centre' style={{color: "#03e9f4", fontSize: "35px"}}>
            <p style={{ color: "white" }}>You agree to all the rules of the chat</p>
            <ControlledCheckbox />
        </div>
    )
}

export function ControlledCheckbox() {
    const isChecked = useSelector(state => state.profile)
    // console.log(isChecked)
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(switchProfile());
    };

    

    return (
        <Checkbox
            checked={isChecked}
            value={isChecked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}
