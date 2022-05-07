import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };
const firebaseConfig = {
    apiKey: "AIzaSyCdLp9Jh-jlM8KuRqZLBnaAtklhophoBqs",
    authDomain: "flavoro-4fd30.firebaseapp.com",
    projectId: "flavoro-4fd30",
    storageBucket: "flavoro-4fd30.appspot.com",
    messagingSenderId: "920759978629",
    appId: "1:920759978629:web:0b94f83a86483800f9f7ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;