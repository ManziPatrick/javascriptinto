// 1. Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// 2. Connect to Firebase
const db = getFirestore(initializeApp({
    apiKey: "AIzaSyBy0R2N0Rk1G3bQwJdnw-oHmCFpaAd1zFo",
    projectId: "codding-ef3c3",
    appId: "1:532229564517:web:0435f9d68261c13e58fe8c"
}));

// 3. POST - Send data to Firebase
window.sendData = async function() {
    try {
        await addDoc(collection(db, "users"), {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('msg').value
        });
        document.getElementById('status').innerHTML = '✅ Sent!';
    } catch (error) {
        document.getElementById('status').innerHTML = '❌ ' + error.message;
    }
}

// 4. GET - Get data from Firebase
window.getData = async function() {
    try {
        const snapshot = await getDocs(collection(db, "users"));
        let html = '';
        snapshot.forEach((doc) => {
            const data = doc.data();
            html += `<div class="bg-gray-100 p-3 my-2.5 rounded"><b>${data.name}</b><br>${data.email}<br>${data.message}</div>`;
        });
        document.getElementById('dataDisplay').innerHTML = html || 'No data';
    } catch (error) {
        document.getElementById('dataDisplay').innerHTML = '❌ ' + error.message;
    }
}
