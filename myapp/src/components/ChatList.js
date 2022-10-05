import * as React from 'react';
import Chat from './Chat';

/*
4. Добавить “массив чатов” - массив объектов с полями name и id (в качестве id можно выбрать
любую уникальную строку). Добавить список чатов - он должен отображаться слева от списка
сообщений. Используйте List и ListItem из material-ui (список пока не несет никакой
функциональности).
*/
export default function ChatList() {
    const [chatList, setChatList] = React.useState([])
    React.useEffect(()=> {
        setChatList(() => [{ id: 1, title: 'Chat-1' }])
    }, [])

    return (
        <>
            <ul className="chat-list">
                {
                    chatList.map((el, i) => <Chat id={el.id} title={el.title} key={i} />)
                }
            </ul>
        </>
    );
}
