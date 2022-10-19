import { configureStore } from "@reduxjs/toolkit"
import { profileReducer, chatsReducer, messageReducer } from "../slices/slices"
// import { profileReducer } from "../reducers/profileReducer"

export const store = configureStore({
    reducer:{
        profile: profileReducer,
        chats: chatsReducer,
        message: messageReducer,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(profileReducer, composeEnhancers(applyMiddleware()))