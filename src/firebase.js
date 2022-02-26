import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrPFwQ4tyEHXfxlZDMsURHKS9PGjZT6Nc",
    authDomain: "my-next-project-24c8a.firebaseapp.com",
    databaseURL: "https://my-next-project-24c8a.firebaseio.com",
    projectId: "my-next-project-24c8a",
    storageBucket: "my-next-project-24c8a.appspot.com",
    messagingSenderId: "931840131332",
    appId: "1:931840131332:web:88de214e9d485e78bd1051",
    measurementId: "G-QZNGXG41B0"
};
initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();