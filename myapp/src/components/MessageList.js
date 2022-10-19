import * as React from 'react';
import Form from './Form';
import Message from './Message';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { botMess } from '../slices/slices'

export default function MessageList() {
    const messageList = useSelector(state => state.message)
    const dispatch = useDispatch()
    const { chatId } = useParams()
    // console.log(chatId)

    const bot = {
        id: chatId,
        text: [
            "Welcome to the chat! Please observe the rules of decency when communicating with another interlocutor!",
            "How are things going?",
            "I'm not very talkative today",
            "I do not think so",
            "Maybe next time!",
            "Something made me feel bad, I'm going to rest...",
            "It was nice to meet you, but I have to go to work. The code won't write itself!",
            "Wonderful....",
            "Lyroooooooooo Jenkins!!!!!",
            "But I have a chicken"
        ]
    }
    React.useEffect(() => {
        if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Bot') {
            setTimeout(() => {
                dispatch(botMess(bot))
            }, 1500)
        }
    }, [messageList])
    console.log(messageList)
    return (
        <div className='wrp'>
            <Form />
            <div className="message-list">
                {
                    messageList.map((el, i) => el.id === chatId ? <Message id={el.id} author={el.author} text={el.text} key={i} /> : null)
                }
            </div>
        </div>
    );
}
