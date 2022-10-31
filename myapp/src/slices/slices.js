import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Профиль
const initialStateProfile = false
const profileSlice = createSlice({
    name: 'profile',
    initialState: initialStateProfile,
    reducers: {
        switchProfile: (state) => {
            return !state
        }
    }
})
export const { switchProfile } = profileSlice.actions
export const profileReducer = profileSlice.reducer

// Чаты
const initialStateChats = []
const chatsSlice = createSlice({
    name: 'chats',
    initialState: initialStateChats,
    reducers: {
        addChat: (state) => {
            return [...state, { id: Math.round(new Date().getTime() / 1000.0), title: `Chat-${state.length + 1}` }]
        },
        removeChat: (state, action) => {
            return [...state.filter((el) => el !== state[action.payload])]
        }
    }
})
export const { addChat, removeChat } = chatsSlice.actions
export const chatsReducer = chatsSlice.reducer


// Cообщения
// https://jsonplaceholder.typicode.com/comments

export const getBotMess = createAsyncThunk('message/getBotMess', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = response.json();
    return data;
})

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: [],
        status: null,
        error: null
    },
    reducers: {
        addMess(state, action) {
            state.messages.push({ id: action.payload.id, text: action.payload.text, author: action.payload.author })
        }
    },
    extraReducers: {
        [getBotMess.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [getBotMess.fulfilled]: (state, action) => {
            state.status = 'resolved';
            if (state.messages.length > 0 && state.messages.slice(-1)[0].author !== 'removeBot') {
                // setTimeout(()=>{
                //     state.messages.push({ id: state.messages[state.messages.length-1].id, text: action.payload[Math.floor(Math.random() * 400)].body, author: 'removeBot' })
                // }, 2500)
                state.messages.push({ id: state.messages[state.messages.length - 1].id, text: action.payload[Math.floor(Math.random() * 400)].body, author: 'removeBot' })
            }
        },
        [getBotMess.rejected]: (state) => {
            state.status = 'rejected';
            state.error = "ERROR"
            console.log(state.error)
        }
    }
})
export const { addMess } = messageSlice.actions
export const messageReducer = messageSlice.reducer

// Новости
// http://api.mediastack.com/v1/news?access_key=6605ac0bcb0ad7b99d0bc393d89d3ac4&countries=ru&languages=ru&limit=3

export const getNews = createAsyncThunk('news/getNews', async () => {
    const response = await fetch('http://api.mediastack.com/v1/news?access_key=6605ac0bcb0ad7b99d0bc393d89d3ac4&countries=ru&languages=ru&limit=6');
    const data = response.json();
    return data;
})

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        newsAPI: [],
        status: null,
        error: null
    },
    reducers: {
        addNextNews(state) {
            if (state.news.length < state.newsAPI.length) {
                state.news = [...state.news, state.newsAPI[state.news.length]]
            } else { alert("Больше новостей нет!")}
        }
    },
    extraReducers: {
        [getNews.pending]: (state) => {
            state.status = 'loading';
            console.log(`Статус запроса API: ${state.status}`)
            state.error = null
        },
        [getNews.fulfilled]: (state, action) => {
            state.status = 'resolved';
            console.log(`Статус запроса API: ${state.status}`)
            state.newsAPI = action.payload.data
            state.news = [state.newsAPI[0]]

        },
        [getNews.rejected]: (state) => {
            state.status = 'rejected';
            console.log(`Статус запроса API: ${state.status}`)
            state.error = "ERROR"
            console.log(state.error)
        }
    }
})
export const { addNextNews } = newsSlice.actions
export const newsReducer = newsSlice.reducer