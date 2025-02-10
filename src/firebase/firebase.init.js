// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiKuQrTdBxjYO19L_3_xeeet5GmoAZY6A",
  authDomain: "job-portal-41d51.firebaseapp.com",
  projectId: "job-portal-41d51",
  storageBucket: "job-portal-41d51.firebasestorage.app",
  messagingSenderId: "201533470437",
  appId: "1:201533470437:web:7a7b163f1d56dbb22e060c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
  export default auth