import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, addNextNews } from '../slices/slices'
import Loader from '../components/Loader';

export default function NewsFeed({ loading, setLoading }) {
    const newsList = useSelector(state => state.news.news)
    const newsAPI = useSelector(state => state.news.newsAPI)
    const dispatch = useDispatch()
    React.useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 700)
        console.log('useEffect');
        console.log(newsList);
        console.log(newsAPI);
        dispatch(getNews())
    }, [])

    const APIERROR = useSelector(state => state.news.error)

    return (

        loading ? <Loader /> :
            <>
                {
                    APIERROR ?
                        <div className='centre'>
                            <p style={{color:"white", fontSize:"37px"}}>Something went wrong!</p>
                            <button className='btn btn-news' onClick={() => { dispatch(getNews()) }}>Try again</button>
                            </div>
                        :
                        <>
                            <button className='btn btn-news' onClick={() => { dispatch(addNextNews()) }}>Show next New</button>
                            {
                                newsList ? <div className='news'>
                                    {
                                        newsList.map((el, index) => {
                                            return (
                                                <div key={index} className='wrp-news'>
                                                    <h3>{el.title} </h3>
                                                    <img src={el.image ? el.image : "https://via.placeholder.com/300x200"} alt=""></img>
                                                    <p>{el.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div> : null
                            }
                        </>
                }
            </>

    )
}

// author
// :
// "Андрей Ставицкий"
// category
// :
// "general"
// country
// :
// "ru"
// description
// :
// "Представители украинской студии GSC Game World прокомментировали информацию об отмене S.T.A.L.K.E.R. 2. По словам разработчиков, процесс создания игры продолжается, сообщения об отмене следует считать слухами. «Когда позже мы объявим точную дату выпуска, предзаказы снова будут доступны для Xbox», — заявили в GSC."
// image
// :
// "https://icdn.lenta.ru/images/2022/09/12/15/20220912151031749/pic_816128da797739fef795dcfdb30fade5.jpeg"
// language
// :
// "ru"
// published_at
// :
// "2022-09-12T16:02:33+00:00"
// source
// :
// "Lenta"
// title
// :
// "Создатели S.T.A.L.K.E.R. 2 прокомментировали отмену игры"
// url
// :
// "https://lenta.ru/news/2022/09/12/jdalker/"