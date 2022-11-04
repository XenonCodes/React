import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createUserThunk, signInUserThunk, removeUser } from '../slices/slices';

export default function LoginView({isAuth}) {
    // const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const dispatch = useDispatch()

    return !isAuth ? (
        <div className='centre' style={{ color: "white" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>Authorization</h2>
                {/* <input type="text" placeholder="User" value={name}
                    onChange = {(el) => {setName(el.target.value)}} /> */}
                <input type="email" placeholder="Email" value={email}
                    onChange={(el) => { setEmail(el.target.value) }} />
                <input type="password" placeholder="Password" value={pass}
                    onChange={(el) => { setPass(el.target.value) }} />
                <div>
                    <button onClick={() => { dispatch(signInUserThunk({ email, pass })) }}>Sign In</button>
                    <button onClick={() => { dispatch(createUserThunk({ email, pass })) }}>Sign Up</button>
                    <button onClick={() => { dispatch(removeUser()) }}>Exit</button>
                </div>
            </div>
        </div>
    ) : (<Navigate to={'/'} />);
}