// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration usando variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "clases-de-guitarra-5036c.firebaseapp.com",
  projectId: "clases-de-guitarra-5036c",
  storageBucket: "clases-de-guitarra-5036c.firebasestorage.app",
  messagingSenderId: "484310390493",
  appId: "1:484310390493:web:91c4c7c0bc0750b6fded34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const firestore = getFirestore(app);
