// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-76214.firebaseapp.com",
  projectId: "real-estate-76214",
  storageBucket: "real-estate-76214.appspot.com",
  messagingSenderId: "806884516738",
  appId: "1:806884516738:web:bfe8541e307dd004c6659b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);