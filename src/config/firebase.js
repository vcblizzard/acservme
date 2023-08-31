import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnxbZnxgdS8YgPKQareKM4_yP9MUDhZJg",
  authDomain: "acservme.firebaseapp.com",
  projectId: "acservme",
  storageBucket: "acservme.appspot.com",
  messagingSenderId: "216501099661",
  appId: "1:216501099661:web:74c915d2d94a1a9e27d6c4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

