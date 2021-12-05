// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCAIt6tuRdsYzMGZVzVs_yK6XShmwCIzg",
  authDomain: "cursoreactcoder.firebaseapp.com",
  projectId: "cursoreactcoder",
  storageBucket: "cursoreactcoder.appspot.com",
  messagingSenderId: "809236002105",
  appId: "1:809236002105:web:84e9314f52f81bcca6e4e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)