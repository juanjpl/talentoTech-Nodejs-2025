import {envs} from "./index.js";
console.log(envs);

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig={
        apiKey: envs.database.apiKey,
        authDomain: envs.database.authDomain,
        projectId: envs.database.projectId,
        storageBucket: envs.database.storageBucket,
        messagingSenderId: envs.database.messagingSenderId,
        appId: envs.database.appId,      
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };