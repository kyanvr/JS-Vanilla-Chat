/**
 * Function to add the chatroom data to Firestore
 */
import { initFirebase } from "./firebase.js";
import { doc, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { db } from "./consts.js";

// Function to add the chatroom to database
export const addChatroomToFirestore = async (name) => {
    initFirebase;
    db;

    try {
      const timestamp = Timestamp.now().toDate();
      const date = new Date(timestamp);
      const convertDate = date.toLocaleString('nl-BE');

      await setDoc(doc(db, "MGER", name), {
          chatroomName: name,
          createdOn: convertDate
      });
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    };
}