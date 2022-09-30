/**
 * Function to create a chatroom
 * @param {*} name 
 */

import { overview } from "./consts.js";

// Function to create a chatroom
export const createChatroom = (name) => {

    // Create the elements
    const divChatrooms = document.createElement('div');
    const chatroom = document.createElement('div');
    const thumbnail = document.createElement('div');
    const text = document.createElement('div');
    const chatroomTitle = document.createElement('h2');
    const clickToJoin = document.createElement('p');
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    // Add class and innerHTML to elements
    divChatrooms.classList.add('divChatrooms');
    chatroom.classList.add('chatroom');
    chatroom.id = name;
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = "<i class=\"far fa-comments\"></i>";
    thumbnail.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    chatroomTitle.innerText = name;
    text.classList.add('text');
    clickToJoin.classList.add('text_small');
    clickToJoin.innerText = 'Click here to join';

    // Append the elements
    text.appendChild(chatroomTitle);
    text.appendChild(clickToJoin);
    chatroom.appendChild(thumbnail);
    chatroom.appendChild(text);
    divChatrooms.appendChild(chatroom);
    overview.appendChild(divChatrooms);
};