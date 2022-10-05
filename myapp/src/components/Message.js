const Message = ({ author, text }) => {

    return (
        <div className='message'>
            <h3>{author}</h3>
            <hr></hr>
            <p className='message__text'>{text}</p>
        </div>
    )
}

export default Message;