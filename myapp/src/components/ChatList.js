import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MessagListContainer from './MessagListContainer';
import { addChat, removeChat } from '../slices/slices'
import { addChatBase, getAllChatBase } from '../firebase/crud';

export function ChatList({chatId, isChats, dispatch}) {
    return (
        <>
            <Box className="chat-list">
                <List>
                    {
                        isChats.map((el, index) => {
                            return (
                                <ListItem key={index} disablePadding>
                                    <Link to={`${el.id}`}>{el.title}</Link>
                                    <IconButton edge="end" aria-label="delete" onClick={() => {
                                        dispatch(removeChat(index))
                                    }}>
                                        <DeleteIcon sx={{ fill: "white" }} />
                                    </IconButton>
                                </ListItem>)
                        })
                    }
                </List>
                <button className='btn-add-chat' onClick={() => {
                    dispatch(addChat())
                    addChatBase({isChats})
                    getAllChatBase()
                }}>+</button>
            </Box>

            {
                chatId && isChats.find(el=> el.id === Number(chatId)) ? <MessagListContainer /> : <h2 className='centre' style={{ fontSize: "60px", color: 'white' }}>Select chat</h2>
            }
        </>
    );
}
