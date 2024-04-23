// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvnSocTV8H00Ghw887gk2HAW-zn5Ro45c",
  authDomain: "dashboard-17c60.firebaseapp.com",
  projectId: "dashboard-17c60",
  storageBucket: "dashboard-17c60.appspot.com",
  messagingSenderId: "188447383378",
  appId: "1:188447383378:web:d25e5f613ed6bba7f3648b",
  measurementId: "G-ZYMDMYRYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);