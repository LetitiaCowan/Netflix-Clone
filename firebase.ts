// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBrvOUuB8IFsUxhgX4CfdUmMJgO6268Jw",
    authDomain: "netflix-clone-def01.firebaseapp.com",
    projectId: "netflix-clone-def01",
    storageBucket: "netflix-clone-def01.appspot.com",
    messagingSenderId: "522845655649",
    appId: "1:522845655649:web:5ba7d646f4ea7f25c91020",
    measurementId: "G-QWJDBTHFRN"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db } 