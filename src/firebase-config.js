import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   
    apiKey: "AIzaSyBep8zVjptrLs3MRC8qVrnzPFe4AAWfsVg",
    authDomain: "notekeeper-407906.firebaseapp.com",
    projectId: "notekeeper-407906",
    storageBucket: "notekeeper-407906.appspot.com",
    messagingSenderId: "621455978342",
    appId: "1:621455978342:web:5cdf32144aed2e371c62a7",
    measurementId: "G-P9JY3P5D1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const NoteKeeper = getFirestore(app);