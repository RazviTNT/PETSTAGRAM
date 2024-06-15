import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6QVPpl3DRa99oXwAlVWB2sfdAGIPEpVk",
  authDomain: "socialapplicenta-84b56.firebaseapp.com",
  projectId: "socialapplicenta-84b56",
  storageBucket: "socialapplicenta-84b56.appspot.com",
  messagingSenderId: "49696441150",
  appId: "1:49696441150:web:98b1940017ff318547a26f",
  measurementId: "G-X3XNRDLZ0E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };