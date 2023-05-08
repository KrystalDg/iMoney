import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHG6SVYo3rSyNWSg9ZF9HRRvzri4YBoBs",
  authDomain: "imoney-d9bad.firebaseapp.com",
  projectId: "imoney-d9bad",
  storageBucket: "imoney-d9bad.appspot.com",
  messagingSenderId: "769727562492",
  appId: "1:769727562492:web:ccc5a0153ed54191c58d79",
  measurementId: "G-F7GYCV1SE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectAuth = getAuth(app);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

const timestamp = serverTimestamp();

export { projectAuth, projectStorage, projectFirestore, timestamp };
