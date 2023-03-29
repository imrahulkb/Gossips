// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh5DkjUSyb7qUakRAtLfH4MaVpWfQU-a0",
  authDomain: "go-gossip.firebaseapp.com",
  projectId: "go-gossip",
  storageBucket: "go-gossip.appspot.com",
  messagingSenderId: "326203412473",
  appId: "1:326203412473:web:281242829ccec6f1fb7728",
  measurementId: "G-WK4QXKG49M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);