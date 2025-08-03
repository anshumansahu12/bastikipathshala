// /js/firebase-config.js

// Firebase App (core SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

// Auth
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Storage
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCiiLK4Z2fx0aHBitbspYlGmyLtyjJJnj8",
  authDomain: "volunteersite12.firebaseapp.com",
  projectId: "volunteersite12",
  storageBucket: "volunteersite12.appspot.com", // ⚠️ Ye correct karo! `.app` nahi `.com` hota hai!
  messagingSenderId: "493501805980",
  appId: "1:493501805980:web:344573a0d25aa3266b0459",
  measurementId: "G-B1DPLB67KL"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);