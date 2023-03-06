// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { REACT_APP_APIKEY, REACT_APP_AUTHDOMAIN, REACT_APP_PROJECTID, REACT_APP_STORAGE_BUCKET, REACT_APP_MSGSENDERID, REACT_APP_APPID } from "@env"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_AUTHDOMAIN,
    projectId: REACT_APP_PROJECTID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MSGSENDERID,
    appId: REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);