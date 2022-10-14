import * as React from 'react';
import Form from './Form';
import Message from './Message';

export default function MessageList({ messageList, setMessageList }) {
    const [messageBody, setMessageBody] = React.useState({
        text: '',
        author: ''
    })

    const textBot = "Welcome to the chat! Please observe the rules of decency when communicating with another interlocutor!"
    React.useEffect(() => {
        if (messageList.length === 1) {
            setTimeout(() => {
                setMessageList(pervstate => [...pervstate, { text: textBot, author: 'Bot' }])
            }, 1500)
        }
    }, [messageList])
    // console.log(messageList)
    return (
        <div className='wrp'>
            <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} messageList={messageList} />
            <div className="message-list">
                {
                    messageList.map((el, i) => <Message author={el.author} text={el.text} key={i} />)
                }
            </div>
        </div>
    );
}
