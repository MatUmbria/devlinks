import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0towQg1E9A8gv7tc09HT42RebH1F7u98",
  authDomain: "reactlinks-19ade.firebaseapp.com",
  projectId: "reactlinks-19ade",
  storageBucket: "reactlinks-19ade.firebasestorage.app",
  messagingSenderId: "1043062118712",
  appId: "1:1043062118712:web:fca05fd5923b842dd5c9cd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };