import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnLikIHEcEVPE-4V3mz-PYmYVf-JMge4I",
  authDomain: "novax-7d1c4.firebaseapp.com",
  projectId: "novax-7d1c4",
  storageBucket: "novax-7d1c4.appspot.com",
  messagingSenderId: "93014129406",
  appId: "1:93014129406:web:33b7be4c4b1adb14a783af",
  measurementId: "G-K76JQPQTNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
