// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkf8n8SLCEvMIdSAkK0BX5Sn4rXOPCR8g",
    authDomain: "react-curso-83e27.firebaseapp.com",
    projectId: "react-curso-83e27",
    storageBucket: "react-curso-83e27.appspot.com",
    messagingSenderId: "696646234604",
    appId: "1:696646234604:web:d6730855c10145c7c0d0c9",
    measurementId: "G-Y5XPQETRHK"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);