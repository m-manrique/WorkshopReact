import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoVOmFGSXQNQ7cBP5UPdl4R56_neLVdnQ",
  authDomain: "workshopreact-a69f2.firebaseapp.com",
  projectId: "workshopreact-a69f2",
  storageBucket: "workshopreact-a69f2.appspot.com",
  messagingSenderId: "444614606539",
  appId: "1:444614606539:web:84f9c37b72ad469ce3254e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);