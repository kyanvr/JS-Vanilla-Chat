/**
 * Sign in with Google
 */
import { initFirebase } from "./firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { auth } from "./consts.js";

// Initialize the Google login
const initGoogle = () => {
    initFirebase;

    const btnGoogle = document.getElementById('btnGoogle');
    btnGoogle.addEventListener('click', signInGoogle);
};

// The Google sign in function
const signInGoogle = (e) => {
    e.preventDefault();

    auth;

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      credential.accessToken;
      // The signed-in user info.
      result.user;
      location.replace('/overview.html');
    })
    .catch((error) => {
      // Handle Errors here.
      error.code;
      error.message;
      // The email of the user's account used.
      error.email;
      // The AuthCredential type that was used.
      GoogleAuthProvider.credentialFromError(error);
    });
};

export { initGoogle };