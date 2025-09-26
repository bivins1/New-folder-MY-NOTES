import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzSUE21kp9wdzxlq3fc2zmiOb7VrOe2Vs",
  authDomain: "my-notes-864ac.firebaseapp.com",
  projectId: "my-notes-864ac",
  storageBucket: "my-notes-864ac.firebasestorage.app",
  messagingSenderId: "212599942517",
  appId: "1:212599942517:web:87405492f1609a5cd3f73c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };


