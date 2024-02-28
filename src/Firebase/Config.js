import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBZcF1qxUGkBHDgmejkxTt9E1vSgFFkpqs",
  authDomain: "chapaibardata.firebaseapp.com",
  projectId: "chapaibardata",
  storageBucket: "chapaibardata.appspot.com",
  messagingSenderId: "943554686914",
  appId: "1:943554686914:web:c05558e5c10ffa7b4b305b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export{ db , storage}

export default app


