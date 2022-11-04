import {collection, doc, getDocs,setDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export const addChatBase = async(data) =>{
    const result = setDoc(doc(firestore,'chats', "LA"),data)
}

//функция для загрузки постов и возврата в виде промиса
export const getAllChatBase = async() =>{
    const response = await getDocs(collection(firestore,'chats')) 
    console.log(response)
    const arr = response.docs.map(e => e.data())
    return arr
}
