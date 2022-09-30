/**
 * Popup screen
 */

// Function to create the popupscreen when user wants to make a new chatroom
export const popupscreen = () => {
    const popup = document.getElementById("popup");
    const btnMakeChatroom = document.getElementById("newChatBtn");
    const span = document.getElementsByClassName("close")[0];
  
      btnMakeChatroom.addEventListener('click', () => {
        popup.style.display = "block";
      });
  
      span.addEventListener('click', () => {
        popup.style.display = "none";
      });
  
      window.addEventListener('click', (event) => {
        if (event.target == popup) {
          popup.style.display = "none";
        }
      });
  };