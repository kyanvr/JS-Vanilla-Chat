/**
 * Add message to Firestore
 */

import { initFirebase } from "./firebase.js";
import { addDoc, collection, Timestamp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { db } from "./consts.js";

// Function to add the sent message to database
export const addMessageToFirestore = async (message, user) => {
    initFirebase;
    db;

    const chatroomName = localStorage.getItem('ChatroomName');

    // Create a timestamp to add to the message
    const timestamp = Timestamp.now().toMillis();
    const date = new Date(timestamp);
    const convertDate = date.toLocaleString('nl-BE');

    try {
      
      await addDoc(collection(db, `MGER/${chatroomName}/Messages`), {
        createdOn : convertDate,
        message: message,
        user: user
      });
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    };
}