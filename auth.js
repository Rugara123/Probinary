import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const registerForm = document.getElementById("registerForm");

if (registerForm) {

  registerForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (password !== confirmPassword) {
      message.innerHTML = "Passwords do not match.";
      return;
    }

    try {

      await createUserWithEmailAndPassword(auth, email, password);

      message.innerHTML = "Account created successfully!";

      window.location.href = "login.html";

    } catch (error) {

      message.innerHTML = error.message;

    }

  });

}
function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        window.location.href = "dashboard.html";
    } else {
        alert("Enter email and password");
    }
}
