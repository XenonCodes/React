import Input from './input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Form = ({ data, setData, setMessage, messageList }) => {
    const { text, author } = data
    const submitForm = (el) => {
        el.preventDefault()
        if (text.length > 0) {
            setMessage(pervstate => [...pervstate, { text, author }])
        }
        setData(
            {
                text: '',
                author: ''
            }
        )
    }

    return (
        <div className="message-box">
            <h2>Message</h2>
            <form onSubmit={submitForm}>
                <Input setData={setData} data={data} messageList={messageList} />
                <Button type="submit" variant="contained" endIcon={<SendIcon />}> Send </Button>
            </form>
        </div>
    )
}

export default Form;