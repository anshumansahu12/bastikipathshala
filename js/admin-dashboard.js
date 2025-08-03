import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Check if admin is logged in
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loadInterns();
  } else {
    alert('You must login first!');
    window.location.href = 'admin-login.html';
  }
});

async function loadInterns() {
  const tableBody = document.querySelector('#internsTable tbody');
  tableBody.innerHTML = '';

  const q = query(collection(db, 'interns'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const row = `
      <tr>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.address}</td>
        <td>${data.interest}</td>
        <td>${data.why}</td>
        <td>${data.createdAt?.toDate().toLocaleString()}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}