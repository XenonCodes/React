import * as React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getBotMess } from '../slices/slices'
import MessagList from './MessageList'

export default function MessagListContainer() {
    const messageList = useSelector(state => state.message.messages)
    const dispatch = useDispatch()
    const { chatId } = useParams()
    // console.log(chatId)

    React.useEffect(() => {
        setTimeout(()=>{dispatch(getBotMess())}, 2000)
        // dispatch(getBotMess())
    }, [messageList, dispatch])
    // console.log(messageList)

    return (
        <MessagList chatId={chatId} messageList={messageList} />
    );
}