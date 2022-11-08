import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAe0uDFXrmBuZ3NMAb5IOW11xK2uPkpy40",
    authDomain: "react-app-gb-30b6a.firebaseapp.com",
    projectId: "react-app-gb-30b6a",
    storageBucket: "react-app-gb-30b6a.appspot.com",
    messagingSenderId: "220453135889",
    appId: "1:220453135889:web:e37c553ce9201ba2a9b3b0"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);