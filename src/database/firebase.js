// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaemoRwvCaKdebIIDuy3iCulz_5tCMpek",
    authDomain: "realenergy-website.firebaseapp.com",
    projectId: "realenergy-website",
    storageBucket: "realenergy-website.appspot.com",
    messagingSenderId: "197235213191",
    appId: "1:197235213191:web:738cf0c85cab88ae984922",
    measurementId: "G-LC491RD5MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)