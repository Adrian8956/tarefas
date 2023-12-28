
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDipi21VoRQ-BILIXbER2opyHbL-Zr8bC0",
  authDomain: "tarefas-9c64b.firebaseapp.com",
  projectId: "tarefas-9c64b",
  storageBucket: "tarefas-9c64b.appspot.com",
  messagingSenderId: "58280070063",
  appId: "1:58280070063:web:16794b6022e648dcff7d5a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export{ db }