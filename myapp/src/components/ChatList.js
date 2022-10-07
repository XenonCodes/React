import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, useParams } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MessagList from './MessageList';

export default function ChatList() {
    const [messageList, setMessageList] = React.useState([])
    const [chatList, setChatList] = React.useState([])
    const { chatId } = useParams()

    React.useEffect(() => {
        setChatList(() => [{ title: 'Chat-1', message: [] }, { title: 'Chat-2', message: [] }])
    }, [])
    React.useEffect(() => {
        setChatList((p) => {
            p.forEach(el => el.message = messageList)
            return [...p]
        })
    }, [messageList])

    // console.log(chatList);

    return (
        <>
            <Box className="chat-list">
                <List>
                    {
                        chatList.map((el, index) => {
                            return (
                                <ListItem id={index} key={index} disablePadding>
                                    <Link to={`${index + 1}`}>{el.title}</Link>
                                    <IconButton edge="end" aria-label="delete" onClick={() => {
                                        setChatList((p) => p.filter(el => el !== p[index]))
                                    }}>
                                        <DeleteIcon sx={{ fill: "white" }} />
                                    </IconButton>
                                </ListItem>)
                        })
                    }
                </List>
                <button className='btn-add-chat' onClick={() => {
                    setChatList(p => [...p, { title: `Chat-${chatList.length + 1}`, message: messageList }])
                }}>+</button>
            </Box>

            {
                chatId && chatList[chatId - 1] ? <MessagList messageList={messageList} setMessageList={setMessageList} /> : <h2 style={{ fontSize: "60px", width: "100%", height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Select chat</h2>
            }
        </>
    );
}
