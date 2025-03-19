import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


// 🔥 Replace with your actual Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyC6aMDYpRgVEyT0P9UF2zDpIJ27d4vL3C4",
    authDomain: "sai-project-ce669.firebaseapp.com",
    projectId: "sai-project-ce669",
    storageBucket: "sai-project-ce669.firebasestorage.app",
    messagingSenderId: "104127551969",
    appId: "1:104127551969:web:1204cc92bc33abc13e9aa0"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage=getStorage(app);
export { signInWithEmailAndPassword, signOut, onAuthStateChanged };
