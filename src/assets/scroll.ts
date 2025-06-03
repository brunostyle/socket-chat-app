export const scrollToBottom = () => {
   let myDiv = document.getElementById('collapse');
   if(myDiv) {
      myDiv.scrollTop = myDiv.scrollHeight;
   }
};
