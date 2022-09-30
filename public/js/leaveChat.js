/**
 * Leave the chat
 */

import { initFirebase } from "./firebase.js";
import { addDoc, collection, Timestamp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { db } from "./consts.js";

// When user leaves chat, a new doc will be created to make a notification that the user left
export const leaveChat = async (user) => {
    initFirebase;

    db;

    const timestamp = Timestamp.now().toMillis();
    const date = new Date(timestamp);
    const convertDate = date.toLocaleString('nl-BE');

    const chatroom = localStorage.getItem('ChatroomName');

    await addDoc(collection(db, `MGER/${chatroom}/Messages`), {
            createdOn : convertDate,
            user: user,
            class: "userLeft"
    });

    try {
        location.replace('/overview.html');
    } catch (error) {
        console.log(error.message);
    }
}