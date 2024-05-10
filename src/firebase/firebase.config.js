// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZRMQu2_6hO4rxx2blKkaIQhajOaO3cM",
  authDomain: "flavortrack-a59b2.firebaseapp.com",
  projectId: "flavortrack-a59b2",
  storageBucket: "flavortrack-a59b2.appspot.com",
  messagingSenderId: "52915649094",
  appId: "1:52915649094:web:23d1486f7fe46eaacea847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;