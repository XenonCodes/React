import * as React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addMess } from '../slices/slices'
import Form from './Form';

const FormContainer = () => {
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
        <Form setMessageBody={setMessageBody} submitForm={submitForm} messageBody={messageBody}/>
    )
}

export default FormContainer;