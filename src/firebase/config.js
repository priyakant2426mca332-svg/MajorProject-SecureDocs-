
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBuCqJ5wjG5jTceofBL3BNZ-RrUJUxKXg",
  authDomain: "docs-174eb.firebaseapp.com",
  projectId: "docs-174eb",
  storageBucket: "docs-174eb.appspot.com",  
  messagingSenderId: "778306959130",
  appId: "1:778306959130:web:98ab74e50b6e916f179ea3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
