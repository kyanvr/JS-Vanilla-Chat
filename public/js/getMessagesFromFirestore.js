/**
 * Get all the chats stored in Firestore
 */

import { collection, query,  onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { createMyMessage } from "./createMyMessage.js";
import { createOtherMessage } from "./createOtherMessage.js";
import { db } from "./consts.js";

// Get the username from local storage
const username = localStorage.getItem('Username');

// Get the messages from the database
export const getMessages = async () => {
    db;

    const chatroom = localStorage.getItem('ChatroomName');
    const q = query(collection(db, `MGER/${chatroom}/Messages`), orderBy('createdOn', 'asc'));

    const messagesDiv = document.getElementById('messages');

    // Listen for realtime updates
    onSnapshot(q , (qSnapshot) => {
        qSnapshot.docChanges().forEach((change) => {
            
            // If a message is added, check if the username = user of message. If so, the message is from the user himself. If not, the message is from someone else.
          if(change.type === 'added') {
            if (change.doc.data().message) {
                if (change.doc.data().user === username) createMyMessage(change.doc.data().message, change.doc.data().class);
                else createOtherMessage(change.doc.data().message, change.doc.data().user);
            } else if (change.doc.data().class === "userJoined") {
                createMyMessage(`${change.doc.data().user} has joined`, change.doc.data().class)
            } else createMyMessage(`${change.doc.data().user} has left`, change.doc.data().class)
            }
         else if (change.type === 'removed') createMyMessage(`${change.doc.data().user} has left`, change.doc.data().class);
        
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        })
    })
}
