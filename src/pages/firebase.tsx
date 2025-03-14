// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// import { getFunctions } from "firebase/functions";
// import { getMessaging } from "firebase/messaging";
// import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: pro,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCOS3YgtYem41kqaayGP4x3ry-GRFI8JTo",
    authDomain: "boardgameboard-35ea9.firebaseapp.com",
    projectId: "boardgameboard-35ea9",
    storageBucket: "boardgameboard-35ea9.firebasestorage.app",
    messagingSenderId: "952814850200",
    appId: "1:952814850200:web:31eb20debada52717c80ed"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };