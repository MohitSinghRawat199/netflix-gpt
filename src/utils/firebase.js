// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRuGVeNmra2vVZN9fZXgdEOEaznz9T3_s",
  authDomain: "netflix-gpt-f44b9.firebaseapp.com",
  projectId: "netflix-gpt-f44b9",
  storageBucket: "netflix-gpt-f44b9.appspot.com",
  messagingSenderId: "633041520111",
  appId: "1:633041520111:web:8a7c102ddd9e2a1733e21a",
  measurementId: "G-6R1QNFTVKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
