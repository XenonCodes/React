import { configureStore } from "@reduxjs/toolkit"
import { profileReducer, chatsReducer, newsReducer, messageReducer, userReducer } from "../slices/slices"

// const rootReducer = combineReducers({
//     profile: profileReducer,
//     chats: chatsReducer,
//     message: messageReducer,
//     news: newsReducer,
//     user: userReducer,
// })

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chats: chatsReducer,
        message: messageReducer,
        news: newsReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
})

// export const persistor = persistStore(store);



// , window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(profileReducer, composeEnhancers(applyMiddleware()))