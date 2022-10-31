import ChatListContainer from '../components/ChatListContainer';
import Loader from '../components/Loader';
import * as React from 'react';

export default function ChatsPage({loading, setLoading}) {
    React.useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 700)
    },[setLoading])


    return (
        loading ? <Loader/> :
        <div style={{ display: 'flex' }}>
            <ChatListContainer />
        </div>
    )
}