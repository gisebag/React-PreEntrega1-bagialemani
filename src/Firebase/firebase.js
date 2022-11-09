import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBrIMCWJcpwadpeAylgAOrl5MaXIDf7sNc",
    authDomain: "ecommerce-amazing.firebaseapp.com",
    projectId: "ecommerce-amazing",
    storageBucket: "ecommerce-amazing.appspot.com",
    messagingSenderId: "165783267979",
    appId: "1:165783267979:web:99bdadcbf5468401d1c28e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);