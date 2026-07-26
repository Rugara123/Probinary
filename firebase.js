// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2xSeCipAGCLNzGAi8yHGA32i75UUvpu0",
  authDomain: "probinary-a294a.firebaseapp.com",
  projectId: "probinary-a294a",
  storageBucket: "probinary-a294a.firebasestorage.app",
  messagingSenderId: "188945465582",
  appId: "1:188945465582:web:436165bdeccbda1683b3ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

export { auth };
