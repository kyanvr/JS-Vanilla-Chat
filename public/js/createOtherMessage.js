/**
 * Create a message from another user
 */

 import { messages } from "./consts.js";

//  Function to create a message from another user
 export const createOtherMessage = (message, user) => {
    // Create the DOM elements
    const divMessage = document.createElement('div');
    const messageContent = document.createElement('div');
    const userName = document.createElement('div');

    // Add all the classes and stuff
    divMessage.classList.add('chat');
    messageContent.classList.add('message');
    messageContent.innerText = message;
    userName.classList.add('name');
    userName.innerText = user;

    // Append the DOM elements
    divMessage.appendChild(userName);
    divMessage.appendChild(messageContent);
    messages.appendChild(divMessage);
}