import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const form = document.getElementById('adminLoginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Login successful!');
    window.location.href = 'admin-dashboard.html'; // ✅ Redirect
  } catch (error) {
    console.error(error);
    alert('Invalid credentials!');
  }
});