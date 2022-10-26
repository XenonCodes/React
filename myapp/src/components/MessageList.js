import FormContainer from './FormContainer';
import Message from './Message';

export default function MessageList({chatId, messageList}) {
    
    return (
        <div className='wrp'>
            <FormContainer />
            <div className="message-list">
                {
                    messageList.map((el, i) => el.id === chatId ? <Message id={el.id} author={el.author} text={el.text} key={i} /> : null)
                }
            </div>
        </div>
    );
}
