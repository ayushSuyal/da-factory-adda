import { initializeApp } from "firebase/app";
import { Firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkJzZT7Os5YpmZCc3tNyt7ZFOd9URHY0w",
  authDomain: "ecommerce-all-120c0.firebaseapp.com",
  projectId: "ecommerce-all-120c0",
  storageBucket: "ecommerce-all-120c0.appspot.com",
  messagingSenderId: "922821769646",
  appId: "1:922821769646:web:4dfe1a6f9c9f219fd1703f",
  measurementId: "G-DR2NKDQSCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export  {db};