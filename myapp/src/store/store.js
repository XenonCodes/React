import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { profileReducer, chatsReducer, messageReducer } from "../slices/slices"
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer,
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);



// , window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(profileReducer, composeEnhancers(applyMiddleware()))