/**
 * Go to chat when chatroom is clicked
 * @param {*} name 
 */
import { initFirebase } from "./firebase.js";
import { addDoc, collection, Timestamp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { db } from "./consts.js";

// Go to a chatroom when clicked on the chatroom in the overview
export const goToChat = (name, user) => {
  initFirebase;

  db;

  // Create a timestamp to add to the doc
  const timestamp = Timestamp.now().toMillis();
  const date = new Date(timestamp);
  const convertDate = date.toLocaleString('nl-BE');

  const btnGoToChat = document.getElementById(name);
  btnGoToChat.addEventListener('click', async () => {
     await addDoc(collection(db, `MGER/${name}/Messages`), {
      createdOn : convertDate,
      user: user,
      class: "userJoined"
    });
    
    // Replace the location to the location of the chatroom
    try 
    {
      localStorage.setItem('ChatroomName', name);
      location.replace('/chat.html');
    } 
    catch (error) 
    {
      console.log(error.message);
    }
  });
};