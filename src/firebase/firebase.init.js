// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Vite_apiKey,
  authDomain: Vite_authDomain,
  projectId: Vite_projectId,
  storageBucket: Vite_storageBucket,
  messagingSenderId: Vite_messagingSenderId,
  appId: Vite_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);