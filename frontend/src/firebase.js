import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyNTGGJrWYOxzEhKdhmLmBDyACqzEd6No",
  authDomain: "expense-tracker-40b01.firebaseapp.com",
  projectId: "expense-tracker-40b01",
  storageBucket: "expense-tracker-40b01.appspot.com",
  messagingSenderId: "42219192976",
  appId: "1:42219192976:web:1199053afbd9ea6abace15",
  measurementId: "G-JD28X0E9TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);
