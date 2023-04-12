
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDlfkPx2aZQh0qBUhI4-hc4Hyw4HjAZ5qQ",
  authDomain: "tarefasnextjs.firebaseapp.com",
  projectId: "tarefasnextjs",
  storageBucket: "tarefasnextjs.appspot.com",
  messagingSenderId: "511684015289",
  appId: "1:511684015289:web:400efa9b67f43956da5768"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db } // exportando a configuração do db 