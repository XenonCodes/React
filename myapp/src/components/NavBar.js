import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <div className='navBar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/chats'}>Chats</Link>
            <Link to={'/profile'}>Profile</Link>
        </div>
    )
}