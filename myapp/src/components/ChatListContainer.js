import { ChatList } from './ChatList'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

export default function ChatListContainer() {
    const { chatId } = useParams()
    const isChats = useSelector(state => state.chats)
    const dispatch = useDispatch()
    // console.log(chatId);
    // console.log(isChats);

    return (
        <ChatList  chatId={chatId} isChats={isChats} dispatch={dispatch}/>
    );
}