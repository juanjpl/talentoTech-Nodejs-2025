import { config } from "dotenv";
config();
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig={
  
  
        apiKey: process.env.FIRESTONE_API_KEY,
        authDomain: process.env.FIRESTONE_AUTH_DOMAIN,
        projectId: process.env.FIRESTONE_PROJECT_ID,
        storageBucket: process.env.FIRESTONE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIRESTONE_MESSAGING_SENDER_ID,
        appId: process.env.FIRESTONE_APP_ID,

        /*
        apikey : "AIzaSyBmMQ30G7N9wPclo-cAFgzBH90-WN7_NkI",
        authDomain : "api-rest-node-js-data-1124c.firebaseapp.com",
        projectId : "api-rest-node-js-data-1124c",
        storageBucket :"api-rest-node-js-data-1124c.firebasestorage.app",
        messagingSenderId : "7168985545",
        appId : "1:7168985545:web:a8dd6a6f6d5568cc7c8018",
        measurementId : "G-NWVPP2FXNQ"

        

        /*
        FIRESTONE_API_KEY = "AIzaSyBmMQ30G7N9wPclo-cAFgzBH90-WN7_NkI",
        FIRESTONE_AUTH_DOMAIN = "api-rest-node-js-data-1124c.firebaseapp.com",
        FIRESTONE_PROJECT_ID = "api-rest-node-js-data-1124c",
        FIRESTONE_STORAGE_BUCKET = "api-rest-node-js-data-1124c.firebasestorage.app",
        FIRESTONE_MESSAGING_SENDER_ID = "7168985545",
        FIRESTONE_APP_ID = "1:7168985545:web:a8dd6a6f6d5568cc7c8018",
        FIRESTONE_MEASUREMENT_ID = "G-NWVPP2FXNQ"

        */
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };