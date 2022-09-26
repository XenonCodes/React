import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [messageList, setMessageList] = useState([]) // 1) Добавить в компонент App поле стейта messageList. В нем хранить массив объектов - сообщений (объект должен содержать, как минимум, поля text и author). Начальное значение - пустой массив).
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })
  
  //4. Добавить в App useEffect - на каждое отправленное пользователем сообщение должен отвечать робот (должно автоматически отправляться сообщение с фиксированным текстом) - для этого необходимо проверять автора последнего сообщения.
  const textBot = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Bot') {
      //5. * Сделать задержку ответа робота - сообщение от него должно отправляться через некоторый промежуток времени после отправки сообщения пользователя (напр., 1.5 сек).
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: textBot, author: 'Bot' }])
      }, 1500)
    }
  }, [messageList])

//3. Добавить и стилизовать форму - поле для ввода текста и кнопка для отправки сообщения. При отправке сообщения обновление UI должно происходить за счет обновления стейта App (messageBody, setMessageBody).
  return (
    <div className="App">
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div className="messageList">
        {
          messageList.map((el, i) => <Message author={el.author} text={el.text} key={i} />) //2.) Рендерить список сообщений через map.
        }
      </div>
    </div>
  );
}

export default App;

const Form = ({ data, setData, setMessage }) => {
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
    <div class="message-box">
      <h2>Message</h2>
      <form onSubmit={submitForm}>
        <div class="user-box">
          <input placeholder='Имя' value={author} onChange={(el) =>
            setData(pervstate => ({ ...pervstate, author: el.target.value }))
          } />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input placeholder='Текст' value={text} onChange={(el) =>
            setData(pervstate => ({ ...pervstate, text: el.target.value }))
          } />
          <label>Text message</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button className='btn' type='submit'>Отправить</button>
        </a>
      </form>
    </div>
  )
}

const Message = ({ author, text }) => {

  return (
    <div className='message'>
      <h3>{author}</h3>
      <hr></hr>
      <p className='message__text'>{text}</p>
    </div>
  )
}