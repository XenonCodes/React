import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Input({ setMessageBody, messageBody }) {
    const { chatId } = useParams()
    const messageList = useSelector(state => state.message)
    const { text, author } = messageBody
    const inputRef = React.useRef(null)
    React.useEffect(() => {
        inputRef.current?.focus()
    }, [messageList])

    return (
        <>
            <TextField inputRef={inputRef} autoFocus={true} className="user-box" id="standard-basic" label="Username" variant="standard" value={author} onChange={(el) =>
                setMessageBody(pervstate => ({ ...pervstate, id:chatId, author: el.target.value }))
            } />
            <TextField className="user-box" id="standard-basic" label="Text" variant="standard" value={text} onChange={(el) =>
                setMessageBody(pervstate => ({ ...pervstate, text: el.target.value }))
            } />
        </>
    );
}