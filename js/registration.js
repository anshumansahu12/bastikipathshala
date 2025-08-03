// /js/registration.js

import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const form = document.getElementById('registrationForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const interest = document.getElementById('interest').value.trim();
  const why = document.getElementById('why').value.trim();

  try {
    await addDoc(collection(db, 'interns'), {
      name,
      email,
      phone,
      address,
      interest,
      why,
      createdAt: serverTimestamp()
    });

    // ✅ Alert user
    alert('Your application has been sent successfully!');

    // ✅ Reset form
    form.reset();

  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Something went wrong. Please try again.');
  }
});