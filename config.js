
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkKXUNKSH59-go4BAVOAzlgSghIYqoEPs",
  authDomain: "flow-58204.firebaseapp.com",
  databaseURL: "https://flow-58204-default-rtdb.firebaseio.com",
  projectId: "flow-58204",
  storageBucket: "flow-58204.appspot.com",
  messagingSenderId: "1091186665970",
  appId: "1:1091186665970:web:b05be51090d1cb3be5a36b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
