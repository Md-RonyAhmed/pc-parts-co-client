// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_OzHwhkBUOaOpfaW90WSl637z_DE6VU",
  authDomain: "pc-parts-co.firebaseapp.com",
  projectId: "pc-parts-co",
  storageBucket: "pc-parts-co.appspot.com",
  messagingSenderId: "719493392134",
  appId: "1:719493392134:web:39fba31c6ccaeaca7fa087",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;