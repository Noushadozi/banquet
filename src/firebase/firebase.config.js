// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdUAxCwCMVpUwfI6g9gxuVigvZK7STtWM",
  authDomain: "banquet-cbdff.firebaseapp.com",
  projectId: "banquet-cbdff",
  storageBucket: "banquet-cbdff.appspot.com",
  messagingSenderId: "1092675220117",
  appId: "1:1092675220117:web:ffc726f859df92ef2d619c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
