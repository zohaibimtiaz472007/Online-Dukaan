// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC55s97zf3SgAXv5G_g5Y4xeG04kvQ8Gg0",
  authDomain: "ecommerce-7bea0.firebaseapp.com",
  projectId: "ecommerce-7bea0",
  storageBucket: "ecommerce-7bea0.appspot.com",
  messagingSenderId: "100779454681",
  appId: "1:100779454681:web:b7e98db9c475e83aaccec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
