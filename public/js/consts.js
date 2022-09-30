/**
 * Consts
 */
import { initFirebase } from "./firebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

initFirebase;

const db = getFirestore();
const auth = getAuth();

const overview = document.getElementById('overview');
const messages = document.getElementById('messages');
const sendBtn = document.getElementById('sendBtn');

export { overview }
export { messages }
export { sendBtn }
export { db }
export { auth }