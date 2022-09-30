/**
 * Register
 */

import { initFirebase } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { auth } from "./consts.js";

// Init the registration
const initRegister = () => {
    initFirebase;

    const btnSignUp = document.getElementById('btnSignUp');
    btnSignUp.addEventListener('click', register);
};

// Register in Firebase
const register = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    auth;

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            userCredential;
            updateProfile(auth.currentUser, {
                displayName: username
              }).then(() => {
                // Profile updated!
                localStorage.setItem('Username', username);
                location.replace('./overview.html');
              }).catch((error) => {
                // An error occurred
                console.log(error);
              });
        });
    } catch (error) {
        console.log(error.message);
    }
}

// When window is loaded
window.addEventListener('load', initRegister);