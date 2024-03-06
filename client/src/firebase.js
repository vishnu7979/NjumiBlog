// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "njumiblog-64463.firebaseapp.com",
  projectId: "njumiblog-64463",
  storageBucket: "njumiblog-64463.appspot.com",
  messagingSenderId: "689547235486",
  appId: "1:689547235486:web:1cc4878e29c787bb656b8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);