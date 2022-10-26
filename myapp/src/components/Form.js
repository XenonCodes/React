import Input from './input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Form = ({setMessageBody, submitForm, messageBody}) => {
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