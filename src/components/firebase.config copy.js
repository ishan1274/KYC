// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoEzw96_tcXEIDLWIz7kupFD8MCts_IPI",
  authDomain: "sc-kyc-c2910.firebaseapp.com",
  projectId: "sc-kyc-c2910",
  storageBucket: "sc-kyc-c2910.firebasestorage.app",
  messagingSenderId: "952896059096",
  appId: "1:952896059096:web:7c22b39e3620a86b2149ad",
  measurementId: "G-KG9JQTPD2W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);