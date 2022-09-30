/**
 * Get chatrooms from Firestore
 */

import { collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { db } from "./consts.js";
import { createChatroom } from "./createChatroom.js";
import { goToChat } from "./goToChat.js";

// Function to get the chatrooms from the database
export const getChatrooms = async () => {
  db;
  const username = localStorage.getItem('Username');
  const q = query(collection(db, 'MGER'), orderBy('createdOn', 'asc'));

  // Update the overview realtime
  onSnapshot(q, (qSnapshot) => {
    qSnapshot.docChanges().forEach((change) => {
      if(change.type === 'added') {
        createChatroom(change.doc.data().chatroomName);
        goToChat(change.doc.data().chatroomName, username);
      }
    })
  })
}