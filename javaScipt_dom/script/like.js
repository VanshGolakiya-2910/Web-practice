value = true;
function checkEvent(){
   let like = document.getElementsByClassName("heart")[0];
   if (value)
   {
         like.style.fill="red";
         value = false;

   }
   else
   {
        like.style.fill = "grey";
        value = true;
   }

}