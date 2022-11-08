import { Link } from "react-router-dom";
import { removeUser } from "../slices/slices";
import { useDispatch } from 'react-redux';

export default function NavBar() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='navBar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/chats'}>Chats</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/newsfeed'}>News feed</Link>
            </div>
            <button className="btn btn-exit" onClick={() => { dispatch(removeUser()) }}>Exit</button>
        </>
    )
}