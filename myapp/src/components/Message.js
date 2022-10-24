const Message = ({id, author, text }) => {

    return (
        <div className='message'>
            <h3>Chat ID: {id}</h3>
            <br />
            <h3>{author}</h3>
            <hr />
            <p className='message__text'>{text}</p>
        </div>
    )
}

export default Message;