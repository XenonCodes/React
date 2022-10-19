import { createSlice } from "@reduxjs/toolkit";

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
            return [...state, { id:Math.round(new Date().getTime()/1000.0), title: `Chat-${state.length + 1}`}]
        },
        removeChat: (state, action) => {
            return [...state.filter((el) => el !== state[action.payload])]
        }
    }
})
export const { addChat, removeChat } = chatsSlice.actions
export const chatsReducer = chatsSlice.reducer


// Cообщения
const initialStateMessage = []
const messageSlice = createSlice({
    name: 'message',
    initialState: initialStateMessage,
    reducers: {
        botMess: (state, action) => {
            return [...state, { id: action.payload.id, text: action.payload.text[Math.floor(Math.random() * 10)], author: 'Bot' }]
        },
        addMess: (state, action) => {
            return [...state, {id:action.payload.id, text:action.payload.text, author:action.payload.author }]
        }
    }
})
export const { botMess, addMess } = messageSlice.actions
export const messageReducer = messageSlice.reducer