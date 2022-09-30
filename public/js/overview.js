/**
 * Overview
 */

import { initSignOut } from "./signout.js";
import { popupscreen } from "./popupOverview.js";
import { createChatroom } from "./createChatroom.js";
import { loader } from "./loader.js";
import { addChatroomToFirestore } from "./addChatroomToFirestore.js";
import { getChatrooms } from "./getChatroomsFromFirestore.js";
import { goToChat } from "./goToChat.js";

const initOverview = async () => {
  // Load the popupscreen
  popupscreen();
  
  // Load the data
  await getChatrooms();

  // When data is loaded, loader will go away
  loader();

  // Load the add chatroom function
  addChatroom();

  // Load the signout function
  initSignOut();

}

// Button to create a new chatroom
const addChatroom = async () => {
  const newChatBtn = document.getElementById('newChatBtn');
  newChatBtn.addEventListener('click', makeChatroom);
}

// When clicked on Add Chat button, a popupscreen will appear and you give the desired name. Then a chatroom will be made with that name and it will be uploaded to Firestore

const makeChatroom = (e) => {
  e.preventDefault();
  const btnAddChatroom = document.getElementById('btnAddChatroom');
  btnAddChatroom.addEventListener('click', () => {
    let chatroomNameInput = document.getElementById('chatroomName');
    const chatroomName = document.getElementById('chatroomName').value;
    // createChatroom(chatroomName);
    addChatroomToFirestore(chatroomName);
    // goToChat(chatroomName);
    popup.style.display = "none";
    chatroomNameInput = "";
  });
}

// When window is loaded
window.addEventListener('load', initOverview);