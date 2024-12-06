// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTyNY3Zoxfzo8rmE9nZxOTjWuUszldVBs",
  authDomain: "netflix-gpt-2e74c.firebaseapp.com",
  projectId: "netflix-gpt-2e74c",
  storageBucket: "netflix-gpt-2e74c.firebasestorage.app",
  messagingSenderId: "173083245740",
  appId: "1:173083245740:web:8e6fabd94806ef194b7309",
  measurementId: "G-EFCNVTJ73S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();