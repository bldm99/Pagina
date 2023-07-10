

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9bBy_PJHR26Lo-N02kfX4fpDFs_XkPso",
    authDomain: "newlab7-eb64d.firebaseapp.com",
    projectId: "newlab7-eb64d",
    storageBucket: "newlab7-eb64d.appspot.com",
    messagingSenderId: "871451493785",
    appId: "1:871451493785:web:ac265b1ac43122ab4e3f08"
};


initializeApp(firebaseConfig);

export const database = getFirestore()