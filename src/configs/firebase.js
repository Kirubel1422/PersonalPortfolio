// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhITRrSocGzPnTDJLV_4LptywIcghcbBw",
  authDomain: "portfolio-944ac.firebaseapp.com",
  projectId: "portfolio-944ac",
  storageBucket: "portfolio-944ac.appspot.com",
  messagingSenderId: "310635052743",
  appId: "1:310635052743:web:60eafeceb928eacc7d48e2",
  measurementId: "G-1Z67MQE5VP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
