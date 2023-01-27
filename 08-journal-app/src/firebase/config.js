// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = getEnvironments();


//console.log(import.meta.env);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};
console.log(firebaseConfig);
//Testing only
// const firebaseConfig = {
//     apiKey: "AIzaSyCqDnz1roQKdxNHm7JFxoktgEOlRgC3nm8",
//     authDomain: "testing-react-97b2a.firebaseapp.com",
//     projectId: "testing-react-97b2a",
//     storageBucket: "testing-react-97b2a.appspot.com",
//     messagingSenderId: "448537573114",
//     appId: "1:448537573114:web:b69d066c42b7d1d6c23b43"
//   };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
