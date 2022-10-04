import './App.css';
import Form from './components/Form';
import Message from './components/Message';
import ChatList from './components/ChatList';
import React, { useState, useEffect } from 'react'

function App() {
  const [messageList, setMessageList] = useState([]) 
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })

  const textBot = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Bot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: textBot, author: 'Bot' }])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <ChatList />
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} messageList={messageList} />
      <div className="message-list">
        {
          messageList.map((el, i) => <Message author={el.author} text={el.text} key={i} />) // 3. Исправить ошибку в консоли, связанную с отсутствием key у сообщений.
        }
      </div>
    </div>
  );
}

export default App;