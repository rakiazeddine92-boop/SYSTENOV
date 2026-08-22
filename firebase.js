import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PUT_YOUR_REAL_API_KEY",
  authDomain: "systenov-platforme.firebaseapp.com",
  projectId: "systenov-platforme",
  storageBucket: "systenov-platforme.appspot.com",
  messagingSenderId: "357439238725",
  appId: "1:357439238725:web:5a5b3868072035c086e92c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);