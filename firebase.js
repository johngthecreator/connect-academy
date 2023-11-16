// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm1X_EGgIQdza2gVaXO3sx4FbNRtrJyYI",
  authDomain: "connect-academy.firebaseapp.com",
  projectId: "connect-academy",
  storageBucket: "connect-academy.appspot.com",
  messagingSenderId: "632954083100",
  appId: "1:632954083100:web:aa090a62ee0b36311d4cd9",
  measurementId: "G-37XV41RY93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)