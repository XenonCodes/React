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
                state.messages.push({ id: state.messages[state.messages.length-1].id, text: action.payload[Math.floor(Math.random() * 400)].body, author: 'removeBot' })
            }
        },
        [getBotMess.rejected]: (state) => { 
            state.status = 'rejected';
            state.error = "ERROR"
            console.log(state.error)
        }
    }
})
export const { botMess, addMess } = messageSlice.actions
export const messageReducer = messageSlice.reducer