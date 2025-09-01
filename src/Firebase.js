import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9EsnY028JuG6R_xzsLU6gMDa8kSnsC9I",
  authDomain: "docs-c6030.firebaseapp.com",
  projectId: "docs-c6030",
  storageBucket: "docs-c6030.firebasestorage.app",
  messagingSenderId: "817047941968",
  appId: "1:817047941968:web:0c94824e3166d0205ff255"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);