// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgqJFgXc11WsQLrM515aV7K3AYSqLIUwg",
    authDomain: "assignment-10-d74ae.firebaseapp.com",
    projectId: "assignment-10-d74ae",
    storageBucket: "assignment-10-d74ae.appspot.com",
    messagingSenderId: "220587895464",
    appId: "1:220587895464:web:aed3d10c55d8df618b709d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;