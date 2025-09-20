import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_API_KEY,
  authDomain: "momentia-ed3df.firebaseapp.com",
  projectId: "momentia-ed3df",
  storageBucket: "momentia-ed3df.firebasestorage.app",
  messagingSenderId: "843471341945",
  appId: "1:843471341945:web:2d32715af79cc4f56a07a8",
  measurementId: "G-CGGYPKK2H7"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);