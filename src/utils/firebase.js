// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYctLCtHRt1AuFpJP6C5eM1nY3TzXkhWQ",
  authDomain: "clases-de-guitarra-5036c.firebaseapp.com",
  projectId: "clases-de-guitarra-5036c",
  storageBucket: "clases-de-guitarra-5036c.firebasestorage.app",
  messagingSenderId: "484310390493",
  appId: "1:484310390493:web:91c4c7c0bc0750b6fded34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
