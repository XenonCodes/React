import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { switchProfile } from '../slices/slices'
import Loader from '../components/Loader';

export default function ProfilePage({loading, setLoading}) {
    React.useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 700)
    },[setLoading])

    return (
        loading ? <Loader/> :
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
