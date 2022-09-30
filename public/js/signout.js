/**
 * Sign out
 */

// Imports
import { initFirebase } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { auth } from "./consts.js";
import { leaveChat } from "./leaveChat.js";

// Initialize the sign out
const initSignOut = () => {
    const btnSignOut = document.getElementById('btnSignOut');
    btnSignOut.addEventListener('click', signout);
}

// Sign out function
const signout = (e) => {
    e.preventDefault();

    initFirebase;
    auth;

    const username = localStorage.getItem('Username');

    signOut(auth).then(() => {
        // Sign-out successful.
        leaveChat(username);
        location.replace('/index.html');
        localStorage.clear();
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
};

export { initSignOut };