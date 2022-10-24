import * as React from 'react';
import Input from './input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addMess } from '../slices/slices'

const Form = () => {
    const { chatId } = useParams()
    const [messageBody, setMessageBody] = React.useState({
        id: chatId,
        text: '',
        author: ''
    })

    // console.log(chatId)
    const dispatch = useDispatch()
    const submitForm = (el) => {
        el.preventDefault()
        if (messageBody.text.length > 0) {
            dispatch(addMess(messageBody))
        }
        setMessageBody(
            {
                id: chatId,
                text: '',
                author: ''
            }
        )
    }

    return (
        <div className="message-box">
            <h2>Message</h2>
            <form onSubmit={submitForm}>
                <Input setMessageBody={setMessageBody} messageBody={messageBody} />
                <Button type="submit" variant="contained" endIcon={<SendIcon />}> Send </Button>
            </form>
        </div>
    )
}

export default Form;