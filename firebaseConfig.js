// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPU19cQVuPF1PYflaRinFAF2-k1Oarnuo",
    authDomain: "web-cloud-ynov-8f909.firebaseapp.com",
    projectId: "web-cloud-ynov-8f909",
    storageBucket: "web-cloud-ynov-8f909.appspot.com",
    messagingSenderId: "461892547195",
    appId: "1:461892547195:web:5326588c6d4c3341ef28de",
    measurementId: "G-W8GNBKZ0R7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);