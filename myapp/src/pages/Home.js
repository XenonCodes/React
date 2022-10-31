import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import People from '@mui/icons-material/People';
import Loader from '../components/Loader';
import * as React from 'react';

export default function HomePage({ userName, loading, setLoading }) {
    React.useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 700)
    },[setLoading])

    return (
        loading ? <Loader/> :
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexGrow: 1, height: "100vh", color: "#03e9f4", fontSize: "35px", flexDirection: "column" }}>
            <h1>Welcome, {userName} !</h1>
            <p style={{ color: "white" }}>You are in the React test chat app.</p>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{backgroundColor:"white"}}>
                            <People sx={{fill:"#1976d2"}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <Link href="/profile" underline="none">
                        {'Profile'}
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{backgroundColor:"white"}} >
                            <SendIcon sx={{fill:"#1976d2"}} />
                        </Avatar>
                    </ListItemAvatar>
                    <Link href="/chats" underline="none">
                        {'Chat'}
                    </Link>
                </ListItem>
            </List>
        </div>
    )
}