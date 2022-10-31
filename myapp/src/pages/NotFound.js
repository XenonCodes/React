import * as React from 'react';
import Loader from '../components/Loader';

export default function NotFound ({loading, setLoading}) {
    React.useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 700)
    },[setLoading])

    return (
        loading ? <Loader/> :
        <div style={{ width: "100%", height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <h1>404 page not found</h1>
        </div>
    )
}