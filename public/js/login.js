/**
 * Login
 */

import { initFirebase } from "./firebase.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { initGoogle } from "./google.js";
import { auth } from "./consts.js";

// Init the login
const initLogin = () => {
    initFirebase;
    auth;

    const btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', login);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          user.uid;
          localStorage.setItem('Username', user.displayName);
          location.replace('/overview.html');
        } else {
          // User is signed out
          console.log('No user found');
        }
      });
}

// Init the Google login
initGoogle;

// Login function
const login = async (e) => {
    e.preventDefault();

    const username = localStorage.getItem('Username');
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const auth = getAuth();
    try {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            userCredential;
            userCredential.displayName = username;
            location.replace('/overview.html');
        })
        ;
    } catch (error) {
        console.log(error);
    }
}

// When window is loaded
window.addEventListener('load', () => {
    initLogin();
    initGoogle();
});