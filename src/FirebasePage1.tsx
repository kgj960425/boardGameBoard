import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FirebasePage1 = () => {

    const firebaseConfig = {
    apiKey: "AIzaSyCOS3YgtYem41kqaayGP4x3ry-GRFI8JTo",
    authDomain: "boardgameboard-35ea9.firebaseapp.com",
    projectId: "boardgameboard-35ea9",
    storageBucket: "boardgameboard-35ea9.firebasestorage.app",
    messagingSenderId: "952814850200",
    appId: "1:952814850200:web:31eb20debada52717c80ed"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app); // Firebase 인증 객체 생성
    
    console.log(auth)

    };


export default FirebasePage1;