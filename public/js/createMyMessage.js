/**
 * Create my message
 */

import { messages } from "./consts.js";

// Function to create a message from the current user
export const createMyMessage = (message, className) => {
    // Create the DOM elements
    const divMessage = document.createElement('div');
    const messageContent = document.createElement('div');

    // Add all the classes and stuff
    divMessage.classList.add('myChat');
    messageContent.classList.add('myMessage');
    messageContent.classList.add(className);
    messageContent.innerText = message;

    // Append the DOM elements
    divMessage.appendChild(messageContent);
    messages.appendChild(divMessage);
}