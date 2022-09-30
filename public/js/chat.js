/**
 * The chatroom
 */

import { sendBtn } from "./consts.js";
import { addMessageToFirestore } from "./addMessageToFirestore.js";
import { getMessages } from "./getMessagesFromFirestore.js";
import { initSignOut } from "./signout.js";
import { leaveChat } from "./leaveChat.js";

const username = localStorage.getItem('Username');

const initChat = async () => {
    // Load the chatroom's name
    getChatroomName();

    // Load the function to create a message
    makeMessage();

    // Get the messages
    getMessages();

    // Load the signout function
    initSignOut();
}

const getChatroomName = () => {
    const titleChosenChatroom = localStorage.getItem('ChatroomName');
    const titleChatroom = document.getElementById('chatroomTitle');
    titleChatroom.innerText = titleChosenChatroom;
}

const makeMessage = () => {
    // Get the input
    const inputField = document.getElementById('inputMessage');

    // Send message when button is clicked
    sendBtn.addEventListener('click', () => {
        let getInput = document.getElementById('inputMessage').value;
        inputField.value = "";
        addMessageToFirestore(getInput, username);
    });

    // Send message when 'enter' is pressed
    inputField.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            let getInput = document.getElementById('inputMessage').value;
            inputField.value = "";
            addMessageToFirestore(getInput, username);
        }
    });
}

// Return to overview
const btnBack = document.getElementById('backBtn');
btnBack.addEventListener('click', () => {
    leaveChat(username);
});

// When window is loaded
window.addEventListener('load', initChat);